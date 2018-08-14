export default function validateTimed(object){
  const {name, timeFrame, quantity, additionalInput, dividedBy} = object;
  return {
    name: name.length===0,
    timeFrame: timeFrame.length===0,
    quantity: quantity==="0",
    additionalInput: additionalInput.length===0,
    dividedBy: dividedBy.length===0,
  }
}