import React from 'react'
import { MdDoneOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const nav = useNavigate()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: '10%',
                paddingBottom: '10%'
            }}
        >

            <div
                style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                Thanks for Purchasing Our team will contact you soon.
            </div>

            <div
                style={{
                    background: 'green',
                    padding: 10,
                    display: 'flex',
                    borderRadius: 13,
                    alignItems: 'center',
                    gap: 20,
                }}
            >
                <MdDoneOutline size={56} color="#fff" />
                <div
                    style={{
                        fontSize: 56,
                        color: "#fff"
                    }}
                >SUCCESS</div>
            </div>

            <div
                onClick={() => nav('/')}
                style={{
                    background: '#030303',
                    color: '#fff',
                    fontWeight: 600,
                    padding: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                    marginTop: 20
                }}
            >
                BACK TO HOME
            </div>

        </div>
    )
}

export default Success