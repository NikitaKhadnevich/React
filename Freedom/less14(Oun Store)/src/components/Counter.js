import obj from "../store/utils"

const Counter = ( {componentCount} ) => {
   console.log(`componentCount`, componentCount)

   const handleClick = () => {
         
   }

   return (
      <>
         <div>
         <button onClick={handleClick}>Increment</button>
         {/* <p>{count}</p> */}
         </div>
      </>
   )
}

export const mapStateToProps = state => ({componentCount: state})
export const mapDispatchToProps = dispatch => ({})
export default obj.connect(mapStateToProps, mapDispatchToProps)(Counter)