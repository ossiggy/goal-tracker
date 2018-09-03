export default function validateTimed(object){
  const {name, description} = object;
  return {
    name: name.length===0,
    description: description.length===0
  }
}