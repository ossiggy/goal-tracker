export default function validateTimed(object){
  const {name, timeFrame, quantity} = object;
  return {
    name: name.length===0,
    quantity: quantity==="0",
    timeFrame: timeFrame.length===0
  }
}