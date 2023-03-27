import Head from 'next/head'
import React, { useState } from 'react';

export default function Submit() {

    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            await fetch(`/api/user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(async r => {
                    console.log(await r.json())
                    if (r.status == 200 && r["id"].length) {
                        window.location.replace(window.location.origin + '/user?id=' + r["id"])
                    } else {
                        setError(r["msg"])
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }
    let title = "Create new User and start learning."
    let button = <button className="" onClick={handleSubmit}><strong>Create</strong></button>
    if (error.length) {
        title = error
        button = <></>
    }
    return (
        <>
            <Head>
                <title>New User</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <div className="">
                    <h1 className="">
                        {title}
                    </h1>
                    {button}
                </div>
            </main>
        </>
    )
}