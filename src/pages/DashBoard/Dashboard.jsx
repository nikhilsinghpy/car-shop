import React from 'react'
import banner1 from "../../assets/New_folder/banner1.png"
import banner2 from "../../assets/New_folder/banner2.png"

import { Card } from '../../Component/card/Card'
import { ProductCard } from '../../Component/ProductCard/ProductCard'
import img1 from "../../assets/New_folder/img1.png"
import img2 from "../../assets/New_folder/img2.png"
import img3 from "../../assets/New_folder/img3.png"
import img4 from "../../assets/New_folder/img4.png"
import img5 from "../../assets/New_folder/img5.png"
import img6 from "../../assets/New_folder/img6.png"
import img7 from "../../assets/New_folder/img7.png"
import img8 from "../../assets/New_folder/img8.png"
import img9 from "../../assets/New_folder/img9.png"
import img10 from "../../assets/New_folder/img10.png"
import img11 from "../../assets/New_folder/img11.png"
import img12 from "../../assets/New_folder/img12.png"

export const Dashboard = () => {

  const cardData = [
    {
      id: 1,
      image: 'https://picsum.photos/300/200?random=1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/300/200?random=2',
      title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/300/200?random=3',
      title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      image: 'https://picsum.photos/300/200?random=4',
      title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 5,
      image: 'https://picsum.photos/300/200?random=5',
      title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 6,
      image: 'https://picsum.photos/300/200?random=6',
      title: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est urna aliquet quam.',
    }
  ];
  

  const productData = [
    {
      id: 1,
      image: img1,
      name: 'Product 1',
      description: 'This is a great product that will meet all your needs and expectations.',
      price: '$29.99',
    },
    {
      id: 2,
      image: img2,
      name: 'Product 2',
      description: 'An excellent choice for those looking for quality and durability.',
      price: '$49.99',
    },
    {
      id: 3,
      image: img3,
      name: 'Product 3',
      description: 'Top-notch product with features that you will love.',
      price: '$19.99',
    },
    {
      id: 4,
      image: img4,
      name: 'Product 4',
      description: 'The perfect product for those who value both style and performance.',
      price: '$39.99',
    },
    {
      id: 5,
      image: img5,
      name: 'Product 5',
      description: 'High-quality product designed to meet the highest standards.',
      price: '$59.99',
    },
    {
      id: 6,
      image: img6,
      name: 'Product 6',
      description: 'A reliable and affordable choice that doesn’t compromise on quality.',
      price: '$24.99',
    },
    {
      id: 7,
      image: img7,
      name: 'Product 1',
      description: 'This is a great product that will meet all your needs and expectations.',
      price: '$29.99',
    },
    {
      id: 8,
      image: img8,
      name: 'Product 2',
      description: 'An excellent choice for those looking for quality and durability.',
      price: '$49.99',
    },
    {
      id: 9,
      image: img9,
      name: 'Product 3',
      description: 'Top-notch product with features that you will love.',
      price: '$19.99',
    },
    {
      id: 10,
      image: img10,
      name: 'Product 4',
      description: 'The perfect product for those who value both style and performance.',
      price: '$39.99',
    },
    {
      id: 11,
      image: img11,
      name: 'Product 5',
      description: 'High-quality product designed to meet the highest standards.',
      price: '$59.99',
    },
    {
      id: 12,
      image: img12,
      name: 'Product 6',
      description: 'A reliable and affordable choice that doesn’t compromise on quality.',
      price: '$24.99',
    },
  ];
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" style={{height: "300px"}}>
            <img src={banner1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" style={{height: "300px"}}>
            <img src={banner2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" style={{height: "300px"}}>
            <img src={banner1} class="d-block w-100" alt="..."/>
          </div>
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>


      {/* code for this card */}

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
            <h4 className='text-center mb-2 text-secondary fw-bold'>SMART PA SYSTEM</h4>
            <p className='text-center mb-2 text-secondary fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ducimus.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mt-3">
            <Card cardData={cardData} />
          </div>
        </div>
      </div>

      {/* section for hot product */}
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
            <h4 className='text-center mb-2 text-secondary fw-bold'>Hot Product</h4>
            <p className='text-center mb-2 text-secondary fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ducimus.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mt-3">
            <ProductCard data={productData} />
          </div>
        </div>
      </div>


      <div className="container-fluid p-5" style={{backgroundColor: "#F3F3F4"}}>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
            <h4 className='text-center mb-2 text-black fw-bold'>A BRIEF OVERVIEW OF THE COMPANY PROFILE</h4>
            <p className='text-center mb-2 text-primary fw-bold fs-12'>, ducimus. . Perspiciatis , saepe sed?</p>
          </div>
        </div>
        <div className="row mt-3">
          <p className='text-start mb-2 text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quas dicta quod sit quasi atque maxime. Obcaecati consequuntur adipisci id atque eveniet ipsa culpa. Iste dicta deserunt corporis? Tempora culpa veniam quos ex, veritatis delectus provident, accusamus illum accusantium, autem laudantium distinctio ducimus! Distinctio sed odit nulla deleniti minus perspiciatis?</p>
          <p className='text-start mb-2 text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quas dicta quod sit quasi atque maxime. Obcaecati consequuntur adipisci id atque eveniet ipsa culpa. Iste dicta deserunt corporis? Tempora culpa veniam quos ex, veritatis delectus provident, accusamus illum accusantium, autem laudantium distinctio ducimus! Distinctio sed odit nulla deleniti minus perspiciatis?</p>
        </div>
      </div>
    </div>
  )
}
