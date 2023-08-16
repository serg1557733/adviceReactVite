import Divider from './visualComponents/Divider';
import DiceButton from './DiceButton';
import { useQuery } from '@tanstack/react-query';
import { ISlip } from '../service/types';
import { adviceApi } from '../service/fetchAdvice';
import { FC } from 'react';

const TipBox: FC = () => {



    const { data, isError, isLoading, isSuccess } = useQuery<ISlip, Error>({ queryKey: ['advice'], queryFn: adviceApi.getAdvice })


    return (

        <div className="tip_box">
            <div className="tip_wrapper">
                {isLoading && <div className="spinner"></div>}
                {isSuccess &&
                    <>
                        <h2 className="tip_title">ADVICE #${data?.slip.id}</h2>
                        <p className="tip_text">{data?.slip.advice}</p>
                    </>
                }
                {isError && <div className="spinner error"> Try again...</div>}
            </div>
            <Divider />
            <DiceButton />
        </div>
    );
};

export default TipBox;