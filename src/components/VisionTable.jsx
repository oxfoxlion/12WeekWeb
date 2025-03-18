import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { useAuth } from '../AuthProvider';


export default function VisionTable (){
    const { user } = useAuth();
    const [myVision, setMyVision] = useState([]);

    useEffect(() => {
        getVision()
    }, [])

    const getVision = async () => {
        const { data, error } = await supabase.from('vision').select('*');
        if (error) {
            console.error("寫入失敗:", error.message);
        } else {
            setMyVision(data.sort(
                (a, b) =>  new Date(b.created_at) - new Date(a.created_at),
              ));
        }

    }

    return (
        <>

{
    myVision && myVision.map((item) => (
        <div className="card mb-3" key={item.id}>
            <div className="card-header">
                {new Date(item.created_at).toLocaleString()}
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="mb-2">
                            <h5 className="fw-bold">想擁有的</h5>
                            <p>{item.things_to_have}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="fw-bold">想做的事</h5>
                            <p>{item.things_to_do}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="fw-bold">想成為的</h5>
                            <p>{item.want_to_become}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-2">
                            <h5 className="fw-bold">人生願景</h5>
                            <p>{item.lifeVision}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="fw-bold">三年個人願景</h5>
                            <p>{item.personal_vision_3y}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="fw-bold">三年職業願景</h5>
                            <p>{item.career_vision_3y}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    )
}
</>
    )
}