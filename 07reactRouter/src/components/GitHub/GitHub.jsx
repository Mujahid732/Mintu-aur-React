import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";




function GitHub() {

    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Mujahid732")
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <>
            <div className="flex justify-center text-center font-black text-3xl p-4 m-4 bg-gray-600 text-white">
                <img className="px-4 rounded-full" src={data.avatar_url} alt="Mujahid's image" width={300} />
                Followeres: {data.followers}
            </div>
            <div className="p-4 text-2xl">
                <h1 className="font-black text-3xl p-4" >GitHub User Name: {data.login}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic ducimus nobis omnis soluta sapiente vero quae, odit voluptatum cumque reiciendis placeat, maiores nesciunt et qui. Doloremque, enim minus asperiores earum aperiam repudiandae eveniet sapiente quam incidunt ullam. Quia, fugiat facere modi est quo mollitia voluptatem nisi corrupti nemo dolorum animi libero delectus? Recusandae dolore possimus inventore quam ea libero velit commodi nulla et exercitationem, consequuntur hic eligendi, at veritatis quae, enim odit voluptates molestias alias? Veniam perferendis dolore voluptate ducimus quod sed facere quae qui placeat quidem accusamus ullam voluptatum repellendus, earum iusto consequuntur ratione esse dolorum accusantium officia.</p>
            </div>

        </>
    )
}

export default GitHub;

export const gitHubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Mujahid732");

    return response.json();
}