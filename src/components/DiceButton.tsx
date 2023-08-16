import { FC } from 'react';
import diceImg from '../assets/images/icon-dice.svg'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adviceApi } from '../service/fetchAdvice';



const DiceButton: FC = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: adviceApi.getAdvice,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['advice'] })
        },
    })

    return (
        <div onClick={() => mutation.mutate()} className="button_wrapper">
            {!mutation.isLoading && <img className="button_wrapper_img" src={diceImg} alt="dice" />}
            {mutation.isLoading && <div className='rotate'> <img className="button_wrapper_img" src={diceImg} alt="dice" /> </div>}
        </div>
    );
};

export default DiceButton;