import { useForm } from "react-hook-form"

import { supabase } from "../../supabase";
import { useAuth } from '../AuthProvider';

export default function Home() {

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = handleSubmit((data) => {
        const plan = {
            name: data.planName,
            start_date: data.planStart
        }

        console.log(plan);
        handleNewPlan(plan);
        reset();
    });

    const handleNewPlan = async (plan) => {

        const { data, error } = await supabase
            .from('plan')
            .insert([
                plan
            ])
            .select()

        if (error) {
            alert('提交失敗');
        } else {
            alert('計畫送出成功');
        }

    }


    return (
        <div className="container">

            <form onSubmit={onSubmit}>

                <div>
                    <label htmlFor="planName">計畫名稱</label>
                    <input type="text" placeholder="請輸入計畫名稱" name="planName" id="planName"
                        {...register('planName', { required: "還沒填寫計畫名稱唷" })} />
                    {errors.title && <p className="text-red-600 my-3">{errors.title.message}</p>}
                </div>


                <div>
                    <label htmlFor="planStart" >計畫開始日期</label>
                    <input type="date" id="planStart"
                        {...register('planStart', { required: "還沒填寫計畫開始時間唷" })} />
                    {errors.title && <p className="text-red-600 my-3">{errors.title.message}</p>}
                </div>
                
                    <button type="submit">送出</button>

            </form>

        </div>
    )
}