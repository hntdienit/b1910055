import Addresses from "../models/Addresses.js";
import UserAddresses from "../models/UserAddresses.js";
import Users from "../models/Users.js";

const getAddresses = async (req, res, next) => {
  const user = req.user;
  const userAddresses = await Addresses.findAll({
    include: [
      {
        model: Users,
        where: { id: user.id },
        required: true,
      },
    ],
  });

  return res.status(200).json(userAddresses);
};

const postNewAddresses = async (req, res, next) => {
  const user = req.user;
  const address = req.body.address;

  const newAddress = await Addresses.create({ address: address });

  const userAddresses = await UserAddresses.create({ userId: user.id, addressId: newAddress.id });

  return res.status(200).json();
};

export default { getAddresses, postNewAddresses };
