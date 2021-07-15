const initState = {
    featuresItem: [
        {
            image: 'images/home/product1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/product2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/product3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/product4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/product5.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/product6.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    categoryItem1: [
        {
            image: 'images/home/gallery1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    categoryItem2: [
        {
            image: 'images/home/gallery3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    categoryItem3: [
        {
            image: 'images/home/gallery1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    categoryItem4: [
        {
            image: 'images/home/gallery2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    categoryItem5: [
        {
            image: 'images/home/gallery4.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/gallery1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ],
    recommendedItem: [
        {
            image: 'images/home/recommend1.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/recommend2.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        },
        {
            image: 'images/home/recommend3.jpg',
            price: 56,
            description: 'Easy Polo Black Edition'
        }
    ]
  };
  
  const ProductReducer = (state:any = initState, action: any) => {
    switch (action.type) {
  
      default: {
        state = { ...state };
        break;
      }
    }
    return state;
  };
  export default ProductReducer;
  