import Menu from './menu';

const menu = new Menu({
  title: 'SuperUser',
  widgets: [
    {
      title: 'CSI',
      link: '#csi',
    },
    {
      title: 'DashBoard',
      link: '#dash',
    },
    {
      title: 'Jira',
      link: '#jira',
    },
  ],
});

document.body.appendChild(menu.elem);
