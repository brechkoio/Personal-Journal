import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
    {
      title: 'Learn React JS',
      date: new Date(),
      text: 'We nead learn this library for successful life :)'
    },
    {
      title: 'Learn Next JS',
      date: new Date(),
      text: 'We nead learn this library for successful life :)'
    },
    {
      title: 'Learn Nest JS',
      date: new Date(),
      text: 'We nead learn this framework for successful life :)'
    }
  ];
  return (
    <div>
      <Button>Save all</Button>
      <CardButton>New memory</CardButton>
      {data.map((item, index) => (
        <CardButton key={index}>
          <JournalItem {...item} />
        </CardButton>
      ))}
    </div>
  );
}

export default App;
