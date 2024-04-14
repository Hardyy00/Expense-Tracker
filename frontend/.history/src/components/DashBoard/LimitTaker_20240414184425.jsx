const LimitTaker = ({label}) => {
    const submitHandler = (event)=>{

        event.

        const form  = new FormData(event.target);
        const obj = Object.fromEntries(form);

        console.log(obj);
    }
  return <form onSubmit={submitHandler}></form>;
};

export default LimitTaker;
