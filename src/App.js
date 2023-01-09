import { useEffect,Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { uiSliceAction } from './store/ui-Slice';
import Notification from './components/UI/Notification';

  let isInitial = true
function App() {
  const cart =useSelector(state=> state.cart);
  const isShown = useSelector((state) => state.ui.cartVisible);
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
 
  useEffect(() => {
    const sendingCartData = async () => {
      dispatch(
        uiSliceAction.showNotification({
          status: "Pending..",
          title: "sending..",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://expenses-eea84-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending failed");
      }
      //  const responseData = await response.json();
      dispatch(
        uiSliceAction.showNotification({
          status: "Success",
          title: "Success",
          message: "Sent  cart data successfully",
        })
      );

      //  console.log(responseData);
    };
    if (isInitial){
      isInitial= false;
      return;
    }

    sendingCartData().catch((error) => {
      dispatch(
        uiSliceAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Fragment>
      { notification && ( <Notification  
        status = {notification.status} 
        title={notification.title}
        message= {notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
