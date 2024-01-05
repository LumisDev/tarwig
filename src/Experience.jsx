import { Html, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { motion as fm } from 'framer-motion';

const Experience = () => {
     return (
          <>
               <Html>
                    <fm.div
                         className='flex flex-col items-center justify-center'
                         initial={{ opacity: 0, y: 100 }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         animate={{ opacity: 1, y: 0 }}
                    >
                         <h1 className='text-green-500 text-3xl font-extrabold underline'>Hello!</h1>
                         <div>
                              Here's a little tarwig for
                              <span className='text-yellow-400 transition-all hover:text-green-600 font-bold'>
                                   {' '}
                                   FUN!!!
                              </span>
                         </div>
                         <a
                              className='text-green-500 underline font-light hover:text-green-600 transition-all duration-500'
                              href='https://github.com/LumisDev/tarwig'
                         >
                              Visit my repo
                         </a>
                    </fm.div>
               </Html>
               <pointLight position={[1, 1, 1]} />
               <ambientLight intensity={5} />
               <OrbitControls />
               <mesh>
                    <sphereGeometry radius={1} />
                    <MeshDistortMaterial distort={1} speed={5} color='#ffaa33' />
               </mesh>
          </>
     );
};

export default Experience;
