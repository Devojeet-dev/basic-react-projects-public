import {Card} from './components/Card';
const infoArray = [{heading3:"compo one ", para:"para 1"},
  {heading3:"compo two ", para:"para 2"},
  {heading3:"compo three ", para:"para 3"}];
function App() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
     {
      infoArray.map((item)=>{
         return <Card 
            heading3={item.heading3}
            para={item.para}
          />
      })
     }
    </div>
  )
}

export default App
