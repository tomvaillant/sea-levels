import { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import { Raster as RasterSource, XYZ } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import styles from '../styles/InteractiveMap.module.css';

function flood(pixels, data) {
  const pixel = pixels[0];
  if (pixel[3]) {
    const height =
      -10000 + (pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1;
    if (height <= data.level) {
      pixel[0] = 134;
      pixel[1] = 203;
      pixel[2] = 249;
      pixel[3] = 255;
    } else {
      pixel[3] = 0;
    }
  }
  return pixel;
}

const key = 'kr3pj3khhp1Mu06n7Hv5';
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const elevation = new XYZ({
  // The RGB values in the source collectively represent elevation.
  // Interpolation of individual colors would produce incorrect evelations and is disabled.
  url: 'https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=' + key,
  tileSize: 512,
  maxZoom: 12,
  crossOrigin: '',
  interpolate: false,
});

const raster = new RasterSource({
  sources: [elevation],
  operation: flood,
});

export default function InteractiveMap() {
  const mapRef = useRef(null);
  const controlRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const control = controlRef.current;
    const output = outputRef.current;
    control.addEventListener('input', function () {
      output.innerText = control.value;
      raster.changed();
    });
    output.innerText = control.value;

    raster.on('beforeoperations', function (event) {
      event.data.level = control.value;
    });

    const locations = document.getElementsByClassName('location');
    for (let i = 0, ii = locations.length; i < ii; ++i) {
      locations[i].addEventListener('click', relocate);
    }

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: attributions,
            url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + key,
            tileSize: 512,
            maxZoom: 22,
          }),
        }),
        new ImageLayer({
          opacity: 0.6,
          source: raster,
        }),
      ],
      view: new View({
        center: fromLonLat([-122.3267, 37.8377]),
        zoom: 11,
      }),
    });

    function relocate(event) {
      const data = event.target.dataset;
      const view = map.getView();
      view.setCenter(fromLonLat(data.center.split(',').map(Number)));
      view.setZoom(Number(data.zoom));
    }

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className={styles.map} ref={mapRef}>
      <label>
        Sea level
        <input id="level" type="range" min="0" max="100" defaultValue="1" ref={controlRef} />
        +<span ref={outputRef}></span> m
      </label>
      <br />
      Go to
      <button className="location" data-center="-122.3267,37.8377" data-zoom="11">
        San Francisco
      </button>
      ,
      <button className="location" data-center="-73.9338,40.6861" data-zoom="11">
        New York
      </button>
      ,
      <button className="location" data-center="72.9481,18.9929" data-zoom="11">
        Mumbai
      </button>
      , or
      <button className="location" data-center="120.831,31.160" data-zoom="9">
        Shanghai
      </button>
    </div>
  );
}