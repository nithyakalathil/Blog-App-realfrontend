import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>

      
      <Route path='/' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/c' element={<Createpost/>}/>
      <Route path='/v' element={<Viewall/>}/>
      <Route path='/m' element={<Viewmypost/>}/>
      
      
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
