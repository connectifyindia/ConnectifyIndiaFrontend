import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableContent from '../../components/Table_Content'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
const Blog_Details = ({ data }) => {

  const [items, setItems] = useState([data])
  return (
    <>
      <Header />
      {items?.length > 0 ? (
        <>
          {items?.map((e) => (
            <>
              <div className='w-[70%] mx-auto font-medium text-xl'>

                <div className='text-4xl font-bold py-3 capitalize'>{e.title}</div>
                <div className='flex justify-start gap-4 py-3'>
                  <div className='capitalize'>created by {new Date(e.date).toLocaleString()}</div>
                  <div><FaEye className='inline' />1167</div>
                  <div><FaCommentAlt className='inline' />0</div>
                </div>
                <div></div>

                <div className='flex justify-start  text-6xl py-2'>
                  <FaFacebookSquare className='' />
                  <FaTwitterSquare />
                  <FaPinterestP />
                  <FaWhatsapp />
                </div>
                <div className='w-full h-[600px]'>
                  <img className='w-full h-full object-cover' src={e.image_url} alt="" />
                </div>
                <div className='my-4'>
                  <p>{e.contents}</p>
                </div>

                {/* table content start here */}
                <TableContent />
                {/* table content end here */}

                <h1 id="intro" className='text-4xl font-bold py-6'>{e.table_heading1}</h1>
                <div>
                  {e.heading1_description}
                </div>

                <h1 id="Legislations" className='text-4xl font-bold py-6'>{e.table_heading2}</h1>
                <div>
                  {e.heading2_description}
                </div>

                <h1 id="Product" className='text-4xl font-bold py-6'>{e.table_heading3}</h1>
                <div className='mb-4'>
                  {e.heading3_description}
                </div>

                <h1 id="Compulsory" className='text-4xl font-bold py-6'>{e.table_heading4}</h1>
                <div className='mb-4'>
                  {e.heading4_description}
                </div>

                <h1 id="provisions" className='text-4xl font-bold py-6'>{e.table_heading5}</h1>
                <div className='mb-4'>
                  {e.heading5_description}
                </div>

                <h1 id="infringement" className='text-4xl font-bold py-6'>{e.table_heading6}</h1>
                <div>
                  {e.heading6_description}

                  {/* <p>There are different kinds of patent infringement that are possible. They are listed and discussed as follows:</p>
                  <div className='flex flex-col gap-4 py-4 '>
                    <p className='list-item list-inside'>Direct Infringement</p>
                    <p className='list-item list-inside'>Indirect Infringement</p>
                    <p className='list-item list-inside'>Contributory Infringement</p>
                    <p className='list-item list-inside'>Literal Infringement</p>
                    <p className='list-item list-inside'>Wilful Infringement</p>
                  </div> */}
                </div>

                <h1 id="Direct" className='text-4xl font-bold py-6'>{e.table_heading7}</h1>
                <div className='mb-2'>
                  {e.heading7_description}
                </div>

                <h1 id="Literal" className='text-4xl font-bold py-6'>{e.table_heading8}</h1>
                <div className='mb-2'>
                  {e.heading8_description}
                </div>

                <h1 id="Non-literal" className='text-4xl font-bold py-6'>{e.table_heading9}</h1>
                <div className='mb-2'>
                  {e.heading9_description}
                </div>

                <h1 id="indirect" className='text-4xl font-bold py-6'>{e.table_heading10}</h1>
                <div className='mb-2'>
                  {e.heading10_description}
                </div>

                <h1 id="Contributory" className='text-4xl font-bold py-6'>{e.table_heading11}</h1>
                <div className='mb-2'>
                  {e.heading11_description}
                </div>

                <h1 id="Willful" className='text-4xl font-bold py-6'>{e.table_heading12}</h1>
                <div className='mb-2'>
                  {e.heading12_description}
                </div>

                <h1 id="Doctrines" className='text-4xl font-bold py-6'>{e.table_heading13}</h1>
                <div className='mb-2'>
                  {e.heading13_description}
                </div>

                <h1 id="Equivalents" className='text-4xl font-bold py-6'>{e.table_heading14}</h1>
                <div className='mb-2'>
                  {e.heading14_description}
                </div>

                <h1 id="Variation" className='text-4xl font-bold py-6'>{e.table_heading15}</h1>
                <div className='mb-2'>
                  {e.heading15_description}
                </div>

                <h1 id="prevent" className='text-4xl font-bold py-6'>{e.table_heading16}</h1>
                <div className='mb-2'>
                  {e.heading16_description}
                </div>


                <h1 id="Creation" className='text-4xl font-bold py-6'>{e.table_heading17}</h1>
                <div className='mb-2'>
                  {e.heading17_description}
                </div>

                <h1 id="licences" className='text-4xl font-bold py-6'>{e.table_heading18}</h1>
                <div className='mb-2'>
                  {e.heading18_description}
                </div>

                <h1 id="Patent" className='text-4xl font-bold py-6'>{e.table_heading19}</h1>
                <div className='mb-2'>
                  {e.heading19_description}
                </div>


                <h1 id="Temporary" className='text-4xl font-bold py-6'>{e.table_heading20}</h1>
                <div className='mb-2'>
                  {e.heading20_description}
                </div>


                <h1 id="Permanent" className='text-4xl font-bold py-6'>{e.table_heading21}</h1>
                <div className='mb-2'>
                  {e.heading21_description}
                </div>

                <h1 id="Damages" className='text-4xl font-bold py-6'>{e.table_heading22}</h1>
                <div className='mb-2'>
                  {e.heading22_description}
                </div>

                <h1 id="Defences" className='text-4xl font-bold py-6'>{e.table_heading23}</h1>
                <div className='mb-4'>
                  {e.heading23_description}

                  {/* <p>There are various defences provided in a patent infringement suit which absolve the defendant of his liability:</p>
                      <div className='flex flex-col gap-4 py-4 '>
                        <p className='list-item list-inside'>Direct Infringement</p>
                        <p className='list-item list-inside'>Indirect Infringement</p>
                        <p className='list-item list-inside'>Contributory Infringement</p>
                        <p className='list-item list-inside'>Literal Infringement</p>
                        <p className='list-item list-inside'>Wilful Infringement</p>
                      </div> */}
                </div>

                <h1 id="amount" className='text-4xl font-bold py-6'>{e.table_heading24}</h1>
                <div className='mb-2'>
                  {e.heading24_description}
                </div>

                <h1 id="Landmark" className='text-4xl font-bold py-6'>{e.table_heading25}</h1>
                <div className='mb-2'>
                  {e.heading25_description}
                </div>

                <h1 id="Conclusion" className='text-4xl font-bold py-6'>{e.table_heading26}</h1>
                <div className='mb-2'>
                  {e.heading26_description}
                </div>

                <h1 id="References" className='text-4xl font-bold py-6'>{e.table_heading27}</h1>
                <div className='mb-2'>
                  {e.heading27_description}
                  {/* <div className='flex flex-col gap-4 py-4 '>
                    <p className='list-item list-inside'>Direct Infringement</p>
                    <p className='list-item list-inside'>Indirect Infringement</p>
                    <p className='list-item list-inside'>Contributory Infringement</p>
                    <p className='list-item list-inside'>Literal Infringement</p>
                    <p className='list-item list-inside'>Wilful Infringement</p>
                  </div> */}
                </div>
              </div>
            </>
          ))}
        </>

      ) : (
        <p>data not found</p>
      )}
      <Footer />

    </>
  )
}

export default Blog_Details;

export const getServerSideProps = async ({ req, params }) => {
  const res = await fetch('connectifyindiasqldbserver.azurewebsites.net/blogdetail/' + params.id)
  const data = await res.json()
  return {
    props: {
      data: data,
      id: params.id
    }
  }

}
