

function VisualForm(props) {
   return (
   <form className="props.clsName">
      <input name="name" value={name} placeholder='name' onChange={this.SendBlock} />
      <input name="email" value={email} placeholder='email' onChange={this.SendBlock} />
      <input name="email" value={pass} placeholder='email' onChange={this.SendBlock}/>
      <button onClick={this.sendData}>Click</button>
      <div>{name}</div>
      <div>{email}</div>
      <div>{pass}</div>
   </form>
   )
}

export default VisualForm