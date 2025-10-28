// Mock authentication functions - will be replaced with real API calls later

const MOCK_USERS_KEY = 'mock_users';

// Get users from localStorage
const getUsers = () => {
  const users = localStorage.getItem(MOCK_USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

// Mock login function
export const mockLogin = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  return {
    success: false,
    message: 'Incorrect email or password',
  };
};

// Mock signup function
export const mockSignup = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const users = getUsers();

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return {
      success: false,
      message: 'Un compte avec cet email existe déjà',
    };
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return {
    success: true,
    message: 'Compte créé avec succès',
  };
};