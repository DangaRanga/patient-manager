import toast from "react-hot-toast";

const options = {
  position: "top-right",
  duration: 2000,
  ariaProps: {
    role: "status",
  },
};

/**
 * The utility function for providing an error toast message
 * @param {string} message The message to be displayed within the toast notification
 * @returns {null}
 */
export function errorNotification(message) {
  toast.error(message, options);
}

/**
 * The utility function for providing an success toast message
 * @param {string} message The message to be displayed within the toast notification
 * @returns {null}
 */
export function successNotification(message) {
  toast.success(message, options);
}
