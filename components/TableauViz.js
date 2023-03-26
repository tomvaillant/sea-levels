import React, { useEffect, useRef } from 'react';

const TableauViz = ({ url, options }) => {
  const vizRef = useRef();

  useEffect(() => {
    if (window.tableau) {
      const viz = new window.tableau.Viz(vizRef.current, url, options);
    } else {
      console.error('Tableau API not found. Make sure to include the Tableau JS API script in your HTML file.');
    }
    
    return () => {
      if (vizRef.current && vizRef.current.getViz()) {
        vizRef.current.getViz().dispose();
      }
    };
  }, [url, options]);

  return <div ref={vizRef} />;
};

export default TableauViz;