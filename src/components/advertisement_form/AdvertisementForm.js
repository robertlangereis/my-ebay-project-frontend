import React from 'react'

export default (props) => {
    const { onSubmit, onChange, values } = props  
    return (
        <form className={'AdvertisementForm'} onSubmit={onSubmit}>
            <label htmlFor="name">Advertisement Title</label>
            <input 
                name="title" 
                key="title" 
                value={values.title}
                onChange={onChange}
                className='AdvertisementForm_title_textarea'>
            </input>
            <label htmlFor="content">Product Description</label>
            <textarea 
                name="description" 
                key="description" 
                value={values.description}
                onChange={onChange}
                className='AdvertisementForm_descr_textarea'>
            </textarea>
            <input 
                type="price"
                key="price"
                name="price"
                value={values.price}
                onChange={onChange}
                className='AdvertisementForm_price_textarea'>
            </input>
            <label htmlFor="content">Address</label>
            <textarea 
                name="address" 
                key="address" 
                value={values.address}
                onChange={onChange}
                className='AdvertisementForm_address_textarea'>
            </textarea>
            <input 
                type="checkbox"
                name="pickup_possible"
                key="pickup_possible"
                value={values.pickup_possible}
                onChange={onChange}
                className='AdvertisementForm_pickup_possible_textarea'>
            </input>
            <input 
                type="phone_nr"
                name="phone_nr"
                key="phone_nr"
                value={values.phone_nr}
                onChange={onChange}
                className='AdvertisementForm_phone_nr_textarea'>
            </input>
            <input 
                type="picture_url"
                name="picture_url"
                key="picture_url"
                value={values.picture_url}
                onChange={onChange}
                className='AdvertisementForm_picture_url_textarea'>
            </input>
            <input 
                type="email"
                name="email"
                key="email"
                value={values.email}
                onChange={onChange}
                className='AdvertisementForm_email_textarea'>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
