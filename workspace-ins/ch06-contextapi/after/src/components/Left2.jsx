import Left3 from '@components/Left3';
import { SimpleContext } from '@context/SimpleContext';
import { useContext, useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('    # Left2 렌더링.');
  });

  const simple = useContext(SimpleContext);

  return (
    <div>
      <h2>Left2 - { simple.hello }</h2>
      <Left3 />
    </div>
  );
}

export default Left2;