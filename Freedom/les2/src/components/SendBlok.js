
const SendBlock = (e)=> {
   this.setState(spredInput => ({
      data: {
         ...spredInput.data,
         [e.target.name]: e.target.value
      }
   }));
};