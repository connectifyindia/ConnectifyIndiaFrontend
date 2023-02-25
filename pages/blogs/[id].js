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

    const [items,setItems] = useState([data])
    return (
        <>
            <Header/>
            {items?.length>0?(
        <>
         {items?.map((e)=>(
          <>
          <div className='w-[70%] mx-auto font-medium text-xl'>

<div className='text-4xl font-bold py-3 capitalize '>{e.title}</div>
<div className='flex justify-start gap-4 py-3'>
  <div className='capitalize'>created by {new Date(e.date).toLocaleString()}</div>
  <div><FaEye className='inline' />1167</div>
  <div><FaCommentAlt className='inline' />0</div>
</div>
<div></div>

<div className='flex justify-start  text-6xl py-2'>
  <FaFacebookSquare className=''/>
  <FaTwitterSquare/>
  <FaPinterestP/>
  <FaWhatsapp/>
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

<h1 id="intro" className='text-4xl font-bold py-6'>Introduction</h1>
<div>
  <p>
    relating to patent infringement.
    This article is written by Satyaki Deb, an LL.M. candidate from the Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur and by Jisha Garg, a student currently pursuing B.A.LLB (Hons.) from the Rajiv Gandhi National University of Law, Punjab. This is an exhaustive article dealing with the concept of Patent Infringement in India. The article throws light on the laws provided in cases of patent infringement, specifies the defences available, mentions types of patent infringement, and discusses the various doctrines that can be used in a patent infringement suit. At last, the article analyses the various landmark judgments pronounced by the courts relating to patent infringement
  </p>
  <p>
    relating to patent infringement.
    This article is written by Satyaki Deb, an LL.M. candidate from the Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur and by Jisha Garg, a student currently pursuing B.A.LLB (Hons.) from the Rajiv Gandhi National University of Law, Punjab. This is an exhaustive article dealing with the concept of Patent Infringement in India. The article throws light on the laws provided in cases of patent infringement, specifies the defences available, mentions types of patent infringement, and discusses the various doctrines that can be used in a patent infringement suit. At last, the article analyses the various landmark judgments pronounced by the courts relating to patent infringement
  </p>
</div>

<h1 id="Legislations" className='text-4xl font-bold py-6'>Legislations governing patent infringement</h1>
<div>
  <p className='mb-4'>The major enactment governing patent infringements in India is the Patents Act, 1970 which was implemented in 1972. It made pharmaceutical product innovations, as well as those for food and agrochemicals, un-patentable in India. It allowed for the copying and marketing of innovations in India that were patented elsewhere in the world. This Act also imposed restrictions on the import of finished formulas and introduced strict price control regulations. However, this act proved detrimental to foreign investments in the country since it did not benefit the big foreign multinational corporations and was not in consonance with the global patent system.</p>
  <p className='mb-4'>
    In 1992, India became a member of the WTO, and therefore, it became important to amend the existing law in order to meet the requirements of the TRIPS agreement. In order to comply with the TRIPS agreement, the introduction of Exclusive Marketing Rights (EMR) and the mailbox system was important. Under the EMR, exclusive rights would be provided to a foreign company to market a pharmaceutical or agricultural product in the Indian market for a specified period of 5 years. The mailbox system would be the one that would receive all applications for the grant of patents for pharmaceutical and agricultural products. In order to implement these provisions in the Patents Act, 1970, amendments to the Act were introduced in 1999, 2002, and 2005.
  </p>
</div>

<h1 id="Product" className='text-4xl font-bold py-6'>Product patent</h1>
<div className='mb-4'>
  <p>The 2005 amendment provided for product patent protection in contrast to the earlier provision of the Act that provided for only process patent protection. Process patent protection meant that only the process used for the manufacture of the product could be patented and not the final product. So, even if the person used a different process than the one used by the original inventor in order to make the same product, it would not be considered a violation of the patent.</p>
</div>

<h1 id="Compulsory" className='text-4xl font-bold py-6'>Compulsory licensing</h1>
<div className='mb-4'>
  <p>This provision was introduced in compliance with the TRIPS agreement. It empowered the government to make the patented product available to the general public for non-commercial use in case of a national emergency by invoking the compulsory licence. If the patented product is not available at an affordable price to the general public, even then, the government can invoke compulsory licensing.</p>
</div>

<h1 id="provisions" className='text-4xl font-bold py-6'>Other provisions</h1>
<div className='mb-4'>
  <p>Under this amendment of 2005, the patent holder could challenge the licence in order to block the general production of his drug. The Act also provided for pre-grant [Section 25(1)] and post-grant opposition [Section 25(2)] clauses. Provisions to safeguard national interests against violations of patent laws were also introduced.</p>
</div>

<h1 id="infringement" className='text-4xl font-bold py-6'>Types of patent infringement</h1>
<div>
  <p>There are different kinds of patent infringement that are possible. They are listed and discussed as follows:</p>
  <div className='flex flex-col gap-4 py-4 '>
    <p className='list-item list-inside'>Direct Infringement</p>
    <p className='list-item list-inside'>Indirect Infringement</p>
    <p className='list-item list-inside'>Contributory Infringement</p>
    <p className='list-item list-inside'>Literal Infringement</p>
    <p className='list-item list-inside'>Wilful Infringement</p>
  </div>
</div>

<h1 id="Direct" className='text-4xl font-bold py-6'>Direct Infringement</h1>
<div className='mb-2'>
  <p>This is the most common type of patent infringement. As the name suggests, when a patented product or method (or substantially similar, i.e. equivalent to them) is used, marketed, sold, offered for sale, or imported without permission of the patentee during the term of such a patent, it constitutes direct patent infringement. It is considered to be of two types, viz- literal and non-literal patent infringement. They are discussed as follows:</p>
</div>

<h1 id="Literal" className='text-4xl font-bold py-6'>Literal infringement</h1>
<div className='mb-2'>
  <p>As the word “literal” signifies, literal infringement is the type of direct patent infringement where every component of the patent specifications is taken to constitute the infringing product or process. In other words, all the claims in the patent specification match the features of the infringing product or process. A pertinent case law in this regard is the case of Polaroid Corp v. Eastman Kodak Co. (1986), where Kodak was considered to have committed literal infringement of Polaroid’s patented instant camera technology. To make things more precise, if a claimed invention is missing from the infringing product or process, then such infringement will not be a literal infringement.</p>
  <p>In another case, Larami Corp. v. Amron (1993), Amron sued Larami for infringing its patented toy water gun. The allegedly infringing device was a toy called SUPER SOAKERS, which had a separable and removable water tank, unlike the patented invention, which had an “elongated housing having a chamber therein for a liquid.” The Court held that Larami’s SUPER SOAKERS did not infringe Amron’s patent.</p>
</div>

<h1 id="Non-literal" className='text-4xl font-bold py-6'>Non-literal infringement</h1>
<div className='mb-2'>
  <p>Non-literal infringement is the type of patent infringement where the infringer has made an equivalent product or process to the patented product or process and has been using, selling, marketing, offering for sale, or importing the same without permission of the patentee during the term of such a patent. It is best to understand these with an illustration.</p>

</div>

<h1 id="indirect" className='text-4xl font-bold py-6'>Indirect or induced infringement</h1>
<div className='mb-2'>
  <p>Indirect infringement is a type of patent infringement where the patentee’s rights are involuntarily or unwillingly infringed by an infringer. It may so happen that some amount of deceit may be involved too. These days, products are becoming increasingly complex, and one end consumer product consists of multiple patented components. The manufacturer of such products cannot always have all the patent rights to the components of such products. Usually, the manufacturer takes licences for such required components to make and sell his products. But still, at times, a substantially similar product (mostly by accidents) is created because the indirect infringer had supplied some necessary components to make the substantially similar product, and the manufacturer ended up making the same without the full set of necessary permissions (licences) for each of the patented components. An illustration will make this clearer.</p>
  <p>Illustration: Suppose X has a patent on a particular type of sound system. Y makes a substantially similar sound system (that infringes X’s patent) with the help of Z’s supply of a particularly essential component. Here, Y has committed direct infringement, and Z has committed indirect infringement of X’s patent rights.</p>
</div>

<h1 id="Contributory" className='text-4xl font-bold py-6'>Contributory infringement</h1>
<div className='mb-2'>
  <p>Contributory patent infringement is a type of secondary patent infringement. This type of infringement happens when an indirect infringer supplies a direct infringer with a part that has no substantial non-infringing use. In other words, the indirect infringer, knowing that such essential parts (components) will make the manufacturer cause direct infringement, still supplies such parts.</p>
  <p>Illustration: Suppose X has a patent on a particular type of sound system. Y makes a substantially similar sound system (that infringes X’s patent) with the help of Z’s supply of a particularly essential component. Here, Y has committed direct infringement, and Z has committed indirect infringement of X’s patent rights.</p>
</div>

<h1 id="Willful" className='text-4xl font-bold py-6'>Willful infringement</h1>
<div className='mb-2'>
  <p>As the name suggests, willful infringement is the type of patent infringement in which the infringer intentionally or willfully disregards and violates the patent rights of the patentee. In other words, if the infringer had knowledge of the patent and still violated the same, then such an infringement shall be a willful infringement.</p>
  <p>So, what becomes important to establish here is that the infringer had knowledge of the patent, and the patentee has the burden to prove this to establish willful infringement. Usually, the patentee tries to discharge such onus by establishing that the infringer was duly served notice but continued infringement nonetheless. In such a case, the infringer has the defence to show that he had taken a legal opinion on the same and continued infringement because he believed in a bona fide manner that such a patent was either invalid or his actions did not constitute infringement.</p>
  <p>If a patentee can successfully show willful infringement, then the infringer may have to face substantial pecuniary penalties that usually cover the legal fees of the patentee and even three to four times the actual damages faced by the plaintiff.</p>
  <p>A significant case law in this regard is Power Lift, Inc. v. Lang Tools, Inc. (1985), where the infringers (Lang Tools) were held to have infringed Power Lift’s patent willfully.</p>
</div>

<h1 id="Doctrines" className='text-4xl font-bold py-6'>Doctrines related to patent infringement</h1>
<div className='mb-2'>
  <p>Various doctrines are used to analyse and justify patent infringement, and they are discussed as follows:</p>
</div>

<h1 id="Equivalents" className='text-4xl font-bold py-6'>Doctrine of Equivalents </h1>
<div className='mb-2'>
  <p>In the event a patent infringement has not been done literally, it may have happened under the judicially created doctrine of equivalents if the patented invention and the allegedly infringing invention have the same function, way, or result. In other words, if the allegedly infringing device performs substantially the same function in substantially the same way to achieve the same result, then it shall constitute patent infringement under the doctrine of equivalents. This doctrine has been accepted by most courts in the world and permits the courts to hold a party liable for patent infringement even though the infringing invention does not fall within the literal scope of the patent claims but nevertheless is equivalent to the patented invention.</p>
  <p>It is clear from the above discussion that the doctrine of equivalents allows a broader interpretation of the claims, but such expansive claim coverage is certainly not unbounded in nature. The expansion of claim coverage as allowed under this doctrine is bound by the doctrine of “prosecution history estoppel” and the prior art.</p>
</div>

<h1 id="Variation" className='text-4xl font-bold py-6'>Doctrine of Colourable Variation</h1>
<div className='mb-2'>
  <p>A colourable variation is an immaterial or insignificant variation. According to the doctrine of colourable variation, if the infringer makes a slight modification to the patented product or process but, in fact, takes in substance the essential features of the patented invention, then it shall constitute patent infringement under the doctrine of colourable variation.</p>
  <p>In the case of Lektophone Corporation v. The Rola Company (1930), a patentee had a patent for a sound-reproducing instrument for phonographs, and it was clear from the patent application that the size and dimensions of the invention were the essence of the patent. The alleged infringer had made the same central paper cone as the patented invention but made a colourable variation and made the cone smaller than the patented invention. The court held that such colourable variation stopped the allegedly infringing invention from accomplishing the object specified in the patent claims and thus did not amount to infringing patentee’s rights.</p>
  <p>Some other less-used doctrines, like the Doctrine of Complete Coverage, Doctrine of Compromise, Doctrine of Estoppel, and Doctrine of Superfluity, also help to justify a case of patent infringement.</p>
</div>

<h1 id="prevent" className='text-4xl font-bold py-6'>Ways to prevent patent infringement</h1>
<div className='mb-2'>
  <p>There are various ways to avoid patent infringement, some of which are listed below:</p>
</div>


<h1 id="Creation" className='text-4xl font-bold py-6'>Creation of original products</h1>
<div className='mb-2'>
  <p>Companies can hire staff members who can create original products using their creativity and intellect. However, the company should not forget to add a clause in the contract that the product produced would be the exclusive right of the company so that the staff does not claim its own rights over the invention at a later stage.</p>
</div>

<h1 id="licences" className='text-4xl font-bold py-6'>Obtaining appropriate licences from patent holders</h1>
<div className='mb-2'>
  <p className='mb-3'>If the companies or corporations plan on using any registered material for further use, then they should seek permission from the patent holder before using it. Otherwise, the company would be made liable for using patented material.</p>
  <p>Royalty-free material basically refers to the use of online material that can be used without any restrictions. However, in order to avoid any violations of the holder of exclusive rights over such material, it is best suited that due credit is given to the holder of such rights.</p>
</div>

<h1 id="Patent" className='text-4xl font-bold py-6'>Patent infringement suit</h1>
<div className='mb-2'>
  <p>The Patents Act, 1970 empowers the patentee to file a suit in case there is an infringement of his exclusive patent rights. In order to file a suit, the limitation period as specified under the Limitation Act, 1963 is three years from the date of the infringement of the patent rights. The burden of proof usually lies on the plaintiff to prove that there was patent infringement by the defendant, but in certain cases, it is at the discretion of the court to decide the burden of proof. In India, both district courts and the High Courts have the power to hear cases related to patent infringement (vide Section 104). However, in case there is a counterclaim for revocation of the patent filed by the defendant, then only the High Court has the right to hear the case. The patentee can file the case in the place of his residence or the place where he carries out his business, or where the cause of action arises. Section 48 of the Indian Patents Act contains the rights of the patentees. It lists the following activities as the infringement of the patentee’s rights:</p>
</div>


<h1 id="Temporary" className='text-4xl font-bold py-6'>Temporary/Interlocutory injunction</h1>
<div className='mb-2'>
  <p>A temporary injunction is invoked by the court at the initial stages of the suit filed by the plaintiff. This is passed in order to prevent the defendant from getting further gains by using other patented products. In order to invoke a temporary injunction, it is important for the patentee to prove that the patent is valid and has been infringed by the defendant. Also, the subsequent infringement of his patent rights has caused him irreparable loss.</p>
</div>


<h1 id="Permanent" className='text-4xl font-bold py-6'>Permanent injunction</h1>
<div className='mb-2'>
  <p>A permanent injunction is invoked when the case is finally decided by the court. If the defendant is found guilty of patent infringement, the temporary injunction becomes a permanent one. However, the temporary injunction is dissolved and does not become a permanent injunction if the defendant is released from liability.</p>
</div>

<h1 id="Damages" className='text-4xl font-bold py-6'>Damages</h1>
<div className='mb-2'>
  <p>In case the defendant is proven guilty, the plaintiff is either awarded damages or an account of profits by the defendant. Damages may not be provided to the plaintiff in case the defendant pleads ignorance and proves that he had no reasonable grounds to believe that the said patent existed at the time of infringement.</p>
</div>

<h1 id="Defences" className='text-4xl font-bold py-6'>Defences available in a patent infringement suit</h1>
<div className='mb-4'>
  <p>There are various defences provided in a patent infringement suit which absolve the defendant of his liability:</p>
  <div className='flex flex-col gap-4 py-4 '>
    <p className='list-item list-inside'>Direct Infringement</p>
    <p className='list-item list-inside'>Indirect Infringement</p>
    <p className='list-item list-inside'>Contributory Infringement</p>
    <p className='list-item list-inside'>Literal Infringement</p>
    <p className='list-item list-inside'>Wilful Infringement</p>
  </div>
</div>

<h1 id="amount" className='text-4xl font-bold py-6'>What does not amount to infringement</h1>
<div className='mb-2'>
  <p className='mb-3'>Section 107A of the Patents Act incorporates bolar provision and provision for parallel imports:</p>
  <p>Bolar provision: It gives rights to the manufacturers of pharmaceutical products to conduct research on various patented products so that the products can be brought to market for the welfare of the general public. But this research can only come into effect after the expiry of the patented product.</p>
  <p className='mb-2'>Parallel import provisions: This gives the right to import the product from the person authorised by the patentee. This importation will not be considered an infringement of the patent rights of the patentee. This meant any person could import patented products from the person who is in possession of the due authorization or licence without seeking permission from the patentee, and this would not be considered an infringement.</p>
</div>

<h1 id="Landmark" className='text-4xl font-bold py-6'>Landmark judgements</h1>
<div className='mb-2'>
  <h2 className='mb-2'>Bajaj Auto Limited vs TVS Motor Company Limited JT 2009 (12) SC 103</h2>
  <p>This case was instituted in the year 2007 by Bajaj Auto Limited against T.V.S. Motor Company Ltd. in the Madras High Court. In this case, the court held that the cases related to copyright infringement, including the cases of patent infringement, took many years to get disposed of. The court ordered the other courts to expedite the disposal of the cases related to copyright infringement. The parties often get caught up in getting an order for a temporary injunction. The court suggested that the proceedings related to such cases be carried out on a day-to-day basis and that decisions be announced within four months of the initiation of the proceedings.</p>
</div>

<h1 id="Conclusion" className='text-4xl font-bold py-6'>Conclusion</h1>
<div className='mb-2'>
  <p>Patent infringement not only hurts the interests of the inventor/patentee but also de-incentivises him/her from doing further inventions. This is the reason why patent laws were introduced, so that the interests of the patent holders could be protected. However, with changing times and changing needs, it is important that patent laws be revisited and that inventors are provided with more safeguards in relation to their inventions. In cases like Moleculon Research Corp. v. CBS, Inc. – 793 F.2d 1261 (Fed. Cir. 1986), it has been held that the true meaning of a patent claim must be interpreted in light of the complete specification and the patent as a whole. Thus, it is also important that judicial interpretations (in India and abroad) of various patent laws be successfully implemented in the best interest of both the patentee and the general public. At last, the government’s contribution would also play a crucial role in protecting maximum interests and promoting new inventions. </p>
</div>

<h1 id="References" className='text-4xl font-bold py-6'>References</h1>
<div className='mb-2'>
  <div className='flex flex-col gap-4 py-4 '>
    <p className='list-item list-inside'>Direct Infringement</p>
    <p className='list-item list-inside'>Indirect Infringement</p>
    <p className='list-item list-inside'>Contributory Infringement</p>
    <p className='list-item list-inside'>Literal Infringement</p>
    <p className='list-item list-inside'>Wilful Infringement</p>
  </div>
</div>
</div>
          </>
         ))}
      </>

      ):(
        <p>data not found</p>
      )}
        <Footer/>

        </>
    )
}

export default Blog_Details;

export const getServerSideProps = async ({ req, params }) => {
    const res = await fetch('http://127.0.0.1:5463/blogdetail/' + params.id)
    const data = await res.json()
    return {
        props: {
            data: data,
            id: params.id
        }
    }

}
