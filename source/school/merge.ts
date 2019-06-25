// interface obj {
//   key: string;
//   value: any
// }
// export const merge = (target:obj, source:obj) :object =>{
//   // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
//   // for (let key of Object.keys(source)) {
//   //   if (typeof key !== 'string') {
//   //     throw new Error
//   //   }
  
//   Object.keys(source).forEach(function(key) {

//     const currentSource = source[key];
//     const currentTarget = target[key];

//       Object.assign(currentSource, merge(currentTarget, currentSource))
    
//   }

//   // // Join `target` and modified `source`
//   // Object.assign(target || {}, source)
//   // return target;
//   return {}
// }