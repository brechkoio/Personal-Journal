import CardButton from './components/Card-Button/CardButton';
import JournalItem from './components/Journal-Item/Journal-Item';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';

import Body from './components/layouts/Body/Body';

import JournalList from './components/Journal-List/JournalList';
import JournalAddButton from './components/Journal-Add/JournalAddButton';

import './App.css';
import JournalForm from './components/Journal-Form/JournalForm';
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
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.map((item, index) => (
            <CardButton key={index}>
              <JournalItem {...item} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
