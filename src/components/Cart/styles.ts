import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "../../styles";

export const CartContainer = styled(Dialog.Content ,{
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0, 

  width: '30rem',
  padding: '4rem 3rem 3rem',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  h2: {
    fontSize: '$lg',
    line: '2rem',
    fontWeight: 'bold',
  }, 
})

export const ButtonClose = styled(Dialog.Close, {
  position: 'absolute',
  color: '$gray500',
  top: 28,
  right: '28px',
  lineHeight: 0,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',

  svg: {
    width: 24,
    height: 24,
  },

})


export const CartContent = styled('div', {
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: '1 1 0%',
  overflowY: 'auto',
})

export const CartContentInfo = styled('div', {
  marginBottom: '3.4375rem',
})


export const CartQuantityContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  'span, p': {
    fontSize: 'mg',
    lineHeight: 1.8, 
  }
})

export const CartPriceContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  p: {
    fontSize: 'mg',
    lineHeight: 1.6,
    fontWeight: 'bold',
  }, 

  strong: {
    fontSize: '$xl',
    lineHeight: 1.4,
    fontWeight: 'bold'
  }
});

export const ButtonFinishCart = styled('button', {
  width: '100%',
  height: 69,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 0,
  color: 'White',
  fontSize: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius:  8,
  background: '$green500',
  transition: '0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})