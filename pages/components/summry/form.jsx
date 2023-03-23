// import './form.scss'

const Form = ({
    setZipCode,
    setCity,
    setAddress,
    setPhone,
    setEmail,
    setName
}) => {
    return (
        <div>
            <INPUTES
                placeholder='Your Full Name'
                setValue={setName}
            />
            <INPUTES
                type='email'
                name='email'
                label="Email"
                placeholder='Your Email'
                setValue={setEmail}
            />
            <INPUTES
                type='number'
                name='number'
                label="Phone Number:"
                placeholder={`Your Phone No. with contry code `}
                setValue={setPhone}
            />
            <INPUTES
                type='text'
                label="Your Full Address:"
                placeholder='Your Address.'
                setValue={setAddress}
            />
            <INPUTES
                type='text'
                label="Your City Name:"
                placeholder='Your City.'
                setValue={setCity}
            />
            <INPUTES
                type='number'
                name='number'
                label="ZIP CODE:"
                placeholder='Your ZIP CODE.'
                setValue={setZipCode}
            />
        </div>
    )
}

export default Form

const INPUTES = ({ label = 'Name:', name = 'name', type = 'text', placeholder, setValue }) => {
    return (
        <div className="inContainer">
            <label>
                {label}
            </label>
            <input type={type} name={name} placeholder={placeholder}
                onChange={(v) => setValue(v.target.value)}
            />
        </div>
    )
}