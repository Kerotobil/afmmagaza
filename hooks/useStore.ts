import create from 'zustand';


type Profile = {
  name?: string;
  avatar_url?: string;
};

type Store = {
  access_token: string,
  setToken: (access_token: string) => void,
  boot: () => void,
  ready: boolean,
  profile: Profile,
  logout: () => void,
}

export const useStore = create<Store>(set => ({
  access_token: null,
  profile: null,
  ready: false,

  setToken: (access_token: string) => {
    localStorage.setItem('access_token', access_token);
    if (access_token) {
      set({
        profile: {
          name: 'Kerem',
          avatar_url: '',
        }
      });
    }
    return set({ access_token });
  },
  boot: async () => {
    const access_token = localStorage.getItem('access_token');
    // Renew token if necessary
    // Redirect to login page if token expired
    set({ access_token });

    if (access_token) {
      set({
        profile: {
          name: 'Kerem',
          avatar_url: '',
        }
      });
    }

    set({ ready: true });
  },
  logout: () => {
    localStorage.clear();
    document.location.reload();
  },
}));
