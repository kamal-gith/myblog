import React, { useEffect } from 'react';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon,
  LinkedinShareButton, LinkedinIcon, } from 'next-share';
import Image from 'next/image';

const PostDetail = ({ post }) => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  // const getContentFragment = (index, text, obj, type) => {
  //   let modifiedText = text;

  //   if (obj) {
  //     if (obj.bold) {
  //       modifiedText = (<b key={index}>{text}</b>);
  //     }
  //     if (obj.bold) {
  //       modifiedText = (<b key={index}>{text}</b>);
  //     }

  //     if (obj.italic) {
  //       modifiedText = (<em key={index}>{text}</em>);
  //     }

  //     if (obj.underline) {
  //       modifiedText = (<u key={index}>{text}</u>);
  //     }
  //   }

  //   switch (type) {
  //     case 'heading-one':
  //       return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
  //     case 'paragraph':
  //       return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
  //     case 'heading-two':
  //       return <h2 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
  //     case 'heading-three':
  //       return <h3 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
  //     case 'heading-four':
  //       return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
  //     case 'heading-five':
  //       return <h5 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
  //     case 'heading-six':
  //       return <h6 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>;
  //     case 'image':
  //       return (
  //         <img
  //           key={index}
  //           alt={obj.title}
  //           height={obj.height}
  //           width={obj.width}
  //           src={obj.src}
  //         />
  //       );
  //     default:
  //       return modifiedText;
  //   }
  // };

  return (
    <>

      
      <div className="bg-white rounded-lg lg:p-8 pb-12 border-t z-10">
        <div className="flex flex-col justify-center relative overflow-hidden mb-6 mt-3 ">
        <h1 className="text-left text-4xl capitalize">{post.title}</h1>
        <h1 className="text-left text-4xl capitalize">{post.category }</h1>

          {/* <h2 className=" m-4 text-lg text-center"> {post.excerpt}</h2> */}
          
          <div className='flex justify-left lg:justify-center p-3'>
          <div className="flex items-left mt-4">
            <Image
              unoptimized
              alt={post.author.name}
              height="50px"
              width="50px"
              className="rounded-full"
              src={post.author.photo.url}
            />
            <div className="flex flex-col ml-3">
              <p className="">{post.author.name} </p>
              <span className="text-gray-400 text-sm">{moment(post.createdAt).startOf('hour').fromNow()}</span>
            </div> 

            <div className='flex lg:gap-8 gap-3 ml-6'>
              <FacebookShareButton url={'https://astermira.vercel.app/post/'+post.slug}><FacebookIcon size={25} round className='transform motion-safe:hover:scale-110'/></FacebookShareButton>
              <LinkedinShareButton url={'https://astermira.vercel.app/post/'+post.slug}><LinkedinIcon size={25} round className='transform motion-safe:hover:scale-110'/></LinkedinShareButton>
              <TwitterShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TwitterIcon size={25} round className='transform motion-safe:hover:scale-110'/></TwitterShareButton>
            </div>

            
          </div>
          </div>
          
          <img src={post.featuredImage.url} alt="" className="mt-10 object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <p className='mb-8'>{post.excerpt}</p>

        <RichText
          content={post.content.raw.children}
          renderers={{
          code_block: ({ children }) => <div className='overflow-auto mb-8 p-1 shadow-lg'> <pre className='line-numbers language-js rounded-md flex min-h-full text-sm leading-6 w-full'><code className=''>{children}</code></pre></div>,           
          // img: ({ src, altText, height, width }) => (
          //     <div className='w-full flex justify-center'>
          //       <Image src={src} alt={altText} height={height} width={width} objectFit='cover' />
          //     </div>
          //   ),
            a: ({ children, href, openInNewTab }) => (<a href={href} target={openInNewTab ? '_blank' : '_self'} rel="noreferrer"  className='hover:underline text-blue-700 hover:text-underline'>
                {children}
              </a>
            ),
            ol: ({ children }) => <ol>{children}</ol>,
            li: ({ children }) => <li type="1">{children}</li>,
            p: ({ children }) => <p>{children}</p>,
            h1: ({ children }) => <h1 className='text-3xl font-bold mb-4 mt-4'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-2xl font-semibold mb-4 mt-4'>{children}</h2>,
            h3: ({ children }) => <h3 className='text-xl font-semibold mb-4 mt-4'>{children}</h3>,
            h4: ({ children }) => <h4 className='text-lg font-semibold mb-4 mt-4'>{children}</h4>,
            h5: ({ children }) => <h5 className='text-md font-semibold mb-4 mt-4'>{children}</h5>,
            p: ({ children }) => <p className="mb-8">{children}</p>,
            blockquote: ({ children }) => <div className='shadow-md border-l-[1px] rounded-md border-indigo-200 mb-8'><blockquote className="leading-[2] italic font-sans relative px-6 text-[#555555] text-md">{children}</blockquote></div>
          }}
        />

          {/* {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })} */}
        </div>
        <div className=" flex border-t border-gray-100 align-center w-full justify-center pt-10 "> 
        <span className=" rounded-md text-sm text-gray-800 mr-2">Kindly Share this Story</span>
        <div className='flex gap-2'>
          <FacebookShareButton url={'https://astermira.vercel.app/post/'+post.slug}><FacebookIcon size={25} round className='transform motion-safe:hover:scale-110'/></FacebookShareButton>
          <TelegramShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TelegramIcon size={25} round className='transform motion-safe:hover:scale-110'/></TelegramShareButton>
          <LinkedinShareButton url={'https://astermira.vercel.app/post/'+post.slug}><LinkedinIcon size={25} round className='transform motion-safe:hover:scale-110'/></LinkedinShareButton>
          <WhatsappShareButton url={'https://astermira.vercel.app/post/'+post.slug}><WhatsappIcon size={25} round className='transform motion-safe:hover:scale-110'/></WhatsappShareButton>
          <TwitterShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TwitterIcon size={25} round className='transform motion-safe:hover:scale-110'/></TwitterShareButton>
        </div>


        </div>
        
      </div>

    </>
  );
};

export default PostDetail;
