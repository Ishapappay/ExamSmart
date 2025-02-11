// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     getCLS(onPerfEntry);
//     getFID(onPerfEntry);
//     getFCP(onPerfEntry);
//     getLCP(onPerfEntry);
//     getTTFB(onPerfEntry);
//   }
// };
// export default reportWebVitals;
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
