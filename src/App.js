import logo from './logo.svg';
import './App.css';
import Customer from './compoenents/Customer'

const customers = [
  {
  'id'      : 1,
  'image'   :'https://placeimg.com/64/64/1', //랜덤으로 이미지를 보여주는 사이트
  'name'    :'한재석',
  'birthday':'940429',
  'gender'  :'남성',
  'job'     :'웹'
  },
  {
    'id'      : 2,
    'image'   :'https://placeimg.com/64/64/2', //랜덤으로 이미지를 보여주는 사이트
    'name'    :'이재원',
    'birthday':'940327',
    'gender'  :'남성',
    'job'     :'앱'
  },
  {
    'id'      : 3,
    'image'   :'https://placeimg.com/64/64/3', //랜덤으로 이미지를 보여주는 사이트
    'name'    :'이돈각',
    'birthday':'940518',
    'gender'  :'남성',
    'job'     :'프레임워크'
  }

]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return <Customer
            key={c.id}
            id={c.id}
            img={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        })
      }
    </div>
  );
}

export default App;
