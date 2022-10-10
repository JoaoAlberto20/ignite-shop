import { styled } from "../../styles";


export const CardCartContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const ImageCardCartContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  maxWidth: 101,
  height: 93,

  img: {
    objectFit: 'cover',
  },
})

export const CardCartContente = styled('div', {
  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    fontWeight: '400',
  },

  span: {
    fontSize: '$md',
    lineHeight: 1.6,
    fontWeight: 'bold',
  },

  button: {
    display: 'block',
    marginTop: 6,

    background: 'transparent',
    border: 0,

    color: '$green500',
    fontSize: '$md',
    fontWeight: 'bold',
    transition: '0.2s',
    

    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  },

})