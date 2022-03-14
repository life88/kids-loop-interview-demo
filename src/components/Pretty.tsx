import * as React from "react";

function Pretty({ data }: { data: unknown }){
  const dataString = JSON.stringify(data, null, 4);

  return (
    <div className='code'>
      { dataString }
    </div>
  )
}


export default Pretty;
