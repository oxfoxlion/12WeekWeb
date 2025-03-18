import { useForm } from "react-hook-form"

import { supabase } from "../../supabase";
import { useAuth } from '../AuthProvider';


export default function VisionForm() {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // 提交表單
    const onSubmit = handleSubmit((data) => {


        const visionData = { 
            user_id:user.id,
            things_to_have: data.things_to_have, 
            things_to_do: data.things_to_do,
            want_to_become:data.want_to_become,
            lifeVision:data.lifeVision,
            personal_vision_3y:data.personal_vision_3y,
            career_vision_3y:data.career_vision_3y
         }

        console.log(visionData);
        handleNewVision(visionData);
        reset();

    });


    const handleNewVision = async (visionData) => {

        const { data, error } = await supabase
            .from('vision')
            .insert([
                visionData
            ])
            .select()

        if (error) {
            alert('提交失敗');
        } else {
            alert('願景送出成功');
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="things_to_have" className="form-label">想要擁有的</label>
                <textarea className="form-control" id="things_to_have" rows="3"
                {...register('things_to_have', {
                    required: '想要擁有的內容還沒有填寫唷',
                })}
                ></textarea>
                {errors.things_to_have && <p className="text-danger my-3">{errors.things_to_have.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="things_to_do" className="form-label">想要做的事</label>
                <textarea className="form-control" id="things_to_do" rows="3"
                {...register('things_to_do', {
                    required: '想要做的事情還沒有填寫唷',
                })}></textarea>
                {errors.things_to_do && <p className="text-danger my-3">{errors.things_to_do.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="want_to_become" className="form-label">想要成為的</label>
                <textarea className="form-control" id="want_to_become" rows="3"
                {...register('want_to_become', {
                    required: '想要成為的人還沒有填寫唷',
                })}></textarea>
                {errors.want_to_become && <p className="text-danger my-3">{errors.want_to_become.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="lifeVision" className="form-label">人生願景</label>
                <textarea className="form-control" id="lifeVision" rows="3"
                {...register('lifeVision', {
                    required: '人生願景還沒有填寫唷',
                })}></textarea>
                {errors.lifeVision && <p className="text-danger my-3">{errors.lifeVision.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="personal_vision_3y" className="form-label">三年個人願景</label>
                <textarea className="form-control" id="personal_vision_3y" rows="3"
                {...register('personal_vision_3y', {
                    required: '三年個人願景還沒有填寫唷',
                })}></textarea>
                {errors.personal_vision_3y && <p className="text-danger my-3">{errors.personal_vision_3y.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="career_vision_3y" className="form-label">三年職業願景</label>
                <textarea className="form-control" id="career_vision_3y" rows="3"
                {...register('career_vision_3y', {
                    required: '三年職業願景還沒有填寫唷',
                })}></textarea>
                {errors.career_vision_3y && <p className="text-danger my-3">{errors.career_vision_3y.message}</p>}
            </div>
            <button className="btn btn-primary">送出</button>
        </form>
    )
}