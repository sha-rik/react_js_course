import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
function App() {
  const response=[
    {
      ItemName: "Nirma",
      ItemDay: "12th",
      ItemMonth: "July",
      ItemYear: "2001"
    },
    {
      ItemName: "surg excel",
      ItemDay: "12th",
      ItemMonth: "July",
      ItemYear: "2001"
    },
    {
      ItemName: "honda",
      ItemDay: "12th",
      ItemMonth: "june",
      ItemYear: "1993"
    }
  ];
  return (
    <>
    <ItemDate day={response[0].ItemDay} month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>
    <Item name={response[0].ItemName}></Item>
    <ItemDate day={response[1].ItemDay} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>
    <Item name={response[1].ItemName}></Item>
    <ItemDate day={response[2].ItemDay} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
    <Item name={response[2].ItemName}></Item>
    
    
    <div className="App">

    </div>
    </>
  );
}

export default App;
