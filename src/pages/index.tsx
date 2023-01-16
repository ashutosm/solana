import { Card } from 'Components/Card';
import { Header } from 'Components/Header';
import * as React from 'react';


export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='flex flex-col gap-10 py-12 px-10'>
      <Header/>
      <div className='flex gap-7 flex-wrap'>
        {[...Array(4)].map((_,i)=>{
           return(
           <React.Fragment key={`card_mainpage_${i}`}>
            <Card
            imageName={'bitcoin-sv-bsv'}
            label={'Bitcoin (BTC)'}
            currencyPrice={'$31,812.80'}
            currencyPercentageIncrease={10}
            tvlPrice={'$60,000'}
            coinPairs={[{name:'ethereum-eth',imageName:'ethereum-eth'},{name:'solana',imageName:'solana-sol'},{name:'shiba',imageName:'shiba-inu-shib'}
          ]}
            
            />
            <Card
            imageName={'solana-sol'}
            label={'Solana (SOL)'}
            currencyPrice={'$32.83'}
            currencyPercentageIncrease={-12.32}
            tvlPrice={'$60,000'}
            coinPairs={[{name:'ethereum-eth',imageName:'ethereum-eth'},{name:'bitcoin',imageName:'bitcoin-sv-bsv'},{name:'shiba',imageName:'shiba-inu-shib'}
          ]}
            
            />
            </React.Fragment>)
        })}
        
        
      </div>
    </div>
  );
}
