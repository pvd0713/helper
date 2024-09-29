import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  // const products = ref([])
  // const getProducts = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products')
  //   products.value = await res.json()
  // }

  const products = [
    { id: 1, 
      title: 'Product 1', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 2, 
      title: 'Product 2', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 3, 
      title: 'Product 3', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 4, 
      title: 'Product 4', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 5, 
      title: 'Product 5', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 6, 
      title: 'Product 6', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 7, 
      title: 'Product 7', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 8, 
      title: 'Product 8', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 9, 
      title: 'Product 9', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 10, 
      title: 'Product 10', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 11, 
      title: 'Product 11', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },
    { id: 12, 
      title: 'Product 12', 
      price: 5000,
      salesCounter: 1573,
      img: 'https://s3-alpha-sig.figma.com/img/e136/6410/ef93b88344c3fb276d61621d0125f649?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc6auokG1d~G1vRC~rKIVsyz3tQ8fXkLXtC1OaeOLjBbpZt14K4aIhQV5GOfw-zk4P7sfCUf8Cjw1H~V4-2vu3XMYpP-byB4rpeEPo3i062mZs6PevQLXnJha9Mm34LAAxICxIbRQYEclVB0tk6-YcKFdJbJp5nH6pd9rpTqQpmkv1eFbonbdz-8HeAAU8tcRy36SEzoJCdML~vBNln3zdjJLTe8Iaj3toVdAtMUGLt5Zm7h2UTKf~pbBzT4s~c49ldio2LO3COqbrJgG4WThBzwILky9o5~ZifcILV4-xW2tzY-VWcOiCvZE1mc13qqN4iT2PkYwgp5qbY9A~TIAg__',
      rating: 4.8,
      category: 'Телефоны',
      date: 'сегодня',
      dateDelivery: 'от 1 дня'
    },

  ]
  return { products }
})
