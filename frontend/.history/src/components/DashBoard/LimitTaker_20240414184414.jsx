const LimitTaker = ({label}) => {
    const submitHandler = (event)=>{

        const form  = new FormData(event.target);
        const obj = Object.fromEntries(form);

        console.log(obj);
    }
  return <form onSubmit={}></form>;
};

export default LimitTaker;
