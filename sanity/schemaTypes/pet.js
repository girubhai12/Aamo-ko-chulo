export default {
    name: 'food',
    type: 'document', // Changed from 'food' to 'document' for type consistency
    title: 'Food Item', // Changed to a more descriptive title
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'name',
        title: 'Name', // Corrected the title
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90 // Adjusted maxLength
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'array',
        of:[{type:'number'}] // Changed type to 'number' assuming it's a single number
      },
      
      {
        name: 'details',
        title: 'Details',
        type: 'string'
      }
    ]
  }
  