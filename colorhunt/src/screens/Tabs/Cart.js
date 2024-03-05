import React from "react";
import { Pressable, ScrollView, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Svg, { Path } from "react-native-svg";
import { deleteFromCart } from "../../Redux/CartReducer";
import Animated, {
  FadeInLeft,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";

const NextIcon = (
  <Svg
    width="15"
    height="10"
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.52917 5.0055L6.5305 5.30058C6.54058 6.471 6.61117 7.51525 6.73283 8.177C6.73283 8.18892 6.86558 8.84525 6.95008 9.06367C7.08283 9.3795 7.32283 9.6475 7.62375 9.81733C7.86467 9.9385 8.11733 10 8.38192 10C8.58983 9.99033 8.93283 9.88575 9.17758 9.798L9.381 9.72C10.7282 9.18483 13.3037 7.43617 14.29 6.36683L14.3628 6.29208L14.6873 5.94183C14.8918 5.67375 15 5.34608 15 4.99358C15 4.67783 14.9037 4.362 14.7109 4.10683C14.6532 4.02417 14.5603 3.91808 14.4776 3.8285L14.1617 3.49783C13.0746 2.39643 10.721 0.851525 9.501 0.339633C9.501 0.328625 8.74283 0.0119333 8.38192 0H8.33375C7.78008 0 7.26283 0.315767 6.99825 0.826142C6.926 0.965667 6.85667 1.23898 6.804 1.47902L6.70917 1.93226C6.601 2.6611 6.52917 3.77917 6.52917 5.0055ZM1.25271 3.73475C0.5609 3.73475 0 4.30108 0 4.99967C0 5.69817 0.5609 6.26458 1.25271 6.26458L4.3354 5.99192C4.87813 5.99192 5.31812 5.54858 5.31812 4.99967C5.31812 4.45158 4.87813 4.00733 4.3354 4.00733L1.25271 3.73475Z"
      fill="black"
    />
  </Svg>
);

const editIcon = (
  <Svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3.03789 16.1004C2.47099 16.1004 1.92731 15.8752 1.52645 15.4743C1.12559 15.0735 0.900391 14.5298 0.900391 13.9629V3.03789C0.900391 2.47099 1.12559 1.92731 1.52645 1.52645C1.92731 1.12559 2.47099 0.900392 3.03789 0.900392H9.92539C10.1144 0.900392 10.2956 0.975458 10.4292 1.10908C10.5628 1.2427 10.6379 1.42392 10.6379 1.61289C10.6379 1.80186 10.5628 1.98309 10.4292 2.11671C10.2956 2.25032 10.1144 2.32539 9.92539 2.32539H3.03789C2.94432 2.32539 2.85167 2.34382 2.76523 2.37963C2.67878 2.41543 2.60024 2.46792 2.53408 2.53408C2.46792 2.60024 2.41543 2.67878 2.37963 2.76523C2.34382 2.85167 2.32539 2.94432 2.32539 3.03789V13.9629C2.32539 14.0565 2.34382 14.1491 2.37963 14.2356C2.41543 14.322 2.46792 14.4005 2.53408 14.4667C2.60024 14.5329 2.67878 14.5853 2.76523 14.6212C2.85167 14.657 2.94432 14.6754 3.03789 14.6754H13.9629C14.1519 14.6754 14.3331 14.6003 14.4667 14.4667C14.6003 14.3331 14.6754 14.1519 14.6754 13.9629V7.31289C14.6754 7.12392 14.7505 6.9427 14.8841 6.80908C15.0177 6.67546 15.1989 6.60039 15.3879 6.60039C15.5769 6.60039 15.7581 6.67546 15.8917 6.80908C16.0253 6.9427 16.1004 7.12392 16.1004 7.31289V13.9629C16.1004 14.5298 15.8752 15.0735 15.4743 15.4743C15.0735 15.8752 14.5298 16.1004 13.9629 16.1004H3.03789ZM4.59827 11.9837L5.10018 9.04427C5.09957 9.0422 5.09957 9.04 5.10018 9.03793L8.45685 5.68127L12.8245 1.3176C12.9566 1.18514 13.1135 1.08008 13.2863 1.00848C13.4591 0.936885 13.6444 0.90015 13.8315 0.900392C14.0199 0.900242 14.2065 0.937219 14.3807 1.00921C14.5548 1.08121 14.7131 1.1868 14.8464 1.31998L15.2636 1.73718L15.6832 2.15677C15.9503 2.42399 16.1003 2.78634 16.1003 3.16416C16.1003 3.54198 15.9503 3.90434 15.6832 4.17156L11.3163 8.53918L7.96127 11.8958C7.95919 11.8964 7.95701 11.8964 7.95493 11.8958L5.01547 12.397C4.99508 12.4006 4.97443 12.4024 4.95372 12.4025C4.9015 12.4024 4.84993 12.3909 4.80257 12.3689C4.7552 12.3469 4.71318 12.3149 4.67938 12.2751C4.64559 12.2353 4.62084 12.1886 4.60683 12.1383C4.59283 12.088 4.58991 12.0353 4.59827 11.9837ZM9.46622 6.69143L6.42622 9.73143L6.25285 10.7448L7.26618 10.5714L10.3062 7.53139L14.6754 3.16535L14.2558 2.74577L13.8362 2.32618L9.46622 6.69143Z"
      fill="#212121"
    />
  </Svg>
);

const deleteIcon = (
  <Svg
    width="15"
    height="17"
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.3829 2.69815C14.7065 2.69815 14.976 2.96688 14.976 3.30883V3.62499C14.976 3.95861 14.7065 4.23567 14.3829 4.23567H0.593923C0.269452 4.23567 0 3.95861 0 3.62499V3.30883C0 2.96688 0.269452 2.69815 0.593923 2.69815H3.0198C3.51258 2.69815 3.94143 2.34788 4.05229 1.85368L4.17933 1.28626C4.37677 0.513336 5.02653 0 5.77014 0H9.20583C9.9414 0 10.5984 0.513336 10.7885 1.2455L10.9245 1.85285C11.0346 2.34788 11.4634 2.69815 11.957 2.69815H14.3829ZM13.1504 14.2555C13.4037 11.8952 13.8471 6.28752 13.8471 6.23096C13.8633 6.05956 13.8075 5.89732 13.6966 5.7667C13.5777 5.6444 13.4271 5.57201 13.2613 5.57201H1.72101C1.55433 5.57201 1.39573 5.6444 1.28568 5.7667C1.17402 5.89732 1.11899 6.05956 1.12709 6.23096C1.12857 6.24135 1.14448 6.43887 1.17108 6.76907C1.28925 8.23613 1.61838 12.3221 1.83106 14.2555C1.98156 15.6799 2.91614 16.5751 4.26987 16.6076C5.31451 16.6317 6.39068 16.64 7.49116 16.64C8.52767 16.64 9.5804 16.6317 10.6574 16.6076C12.0581 16.5834 12.9918 15.704 13.1504 14.2555Z"
      fill="#212121"
    />
  </Svg>
);

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // Calculate the total number of items in the cart
  const totalItems = cart.length;
  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  const handleDeleteItemInCart = (articleNo) => {
    dispatch(deleteFromCart({ articleNo }));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {cart.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: 40,
                fontFamily: "Glory_700Bold",
              }}
            >
              Your Cart is Empty
            </Text>
          </View>
        ) : (
          <ScrollView>
            <View style={{ margin: 20, gap: 10 }}>
              {cart.map((item) => (
                <Animated.View
                  entering={FadeInLeft}
                  exiting={FadeOutRight}
                  layout={LinearTransition}
                  key={item.articleNo}
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 12,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: "rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <Image
                        source={item.imageurl}
                        resizeMode="cover"
                        style={{ width: 90, height: 90, borderRadius: 8 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1,
                        paddingLeft: 5,
                      }}
                    >
                      <View style={{ justifyContent: "space-between" }}>
                        <View>
                          <Text
                            style={{
                              fontFamily: "Glory_700Bold",
                              fontSize: 18,
                            }}
                          >
                            {item.articleNo}
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Glory_400Regular",
                              fontSize: 14,
                            }}
                          >
                            {item.type}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontFamily: "Glory_400Regular",
                              fontSize: 14,
                            }}
                          >
                            Rate
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Glory_700Bold",
                              fontSize: 18,
                            }}
                          >
                            ${item.price}
                          </Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Pressable
                          onPress={() =>
                            navigation.navigate("productDetail", {
                              details: item,
                            })
                          }
                        >
                          {editIcon}
                        </Pressable>
                        <Pressable
                          onPress={() => handleDeleteItemInCart(item.articleNo)}
                        >
                          {deleteIcon}
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Animated.View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      {cart.length === 0 && (
        <View
          style={{
            height: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={{
              width: 189,
              height: 50,
              backgroundColor: "rgba(33, 33, 33, 1)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("HomeWelcome")}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Glory_700Bold",
                fontSize: 18,
              }}
            >
              Create Order
            </Text>
          </Pressable>
        </View>
      )}
      {cart.length !== 0 && (
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={{
                width: 112,
                height: 38,
                backgroundColor: "rgba(33, 33, 33, 1)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7.6,
              }}
              onPress={() => navigation.navigate("HomeWelcome")}
            >
              <Text
                style={{
                  fontFamily: "Glory_600SemiBold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                Add More
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                color: "rgba(88, 86, 86, 1)",
                fontFamily: "Glory_600SemiBold",
                fontSize: 18,
              }}
            >
              Total ({totalItems} item{totalItems !== 1 ? "s" : ""}):
            </Text>
            <View>
              <Text
                style={{
                  fontFamily: "Glory_400Regular",
                  fontSize: 11,
                  textAlign: "right",
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Glory_700Bold",
                  fontSize: 18,
                }}
              >
                ${totalPrice}
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(33, 33, 33, 1)",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "rgba(88, 86, 86, 1)",
                fontFamily: "Glory_700Bold",
                fontSize: 18,
                color: "white",
                marginVertical: 10,
                marginHorizontal: 20,
              }}
            >
              Proceed to Checkout
            </Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
                margin: 10,
              }}
            >
              {NextIcon}
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Cart;
