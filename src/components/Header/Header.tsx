import Link from 'next/link';


export const Header = () => {
	
  
	const menuItems = [
	  {
		key: '/about',
		label: <Link href="/about">About Us</Link>,
	  },
	  {
		key: '/help',
		label: <Link href="/help">Help</Link>,
	  },
	  {
		key: '/self-help',
		label: <Link href="/self-help">Self Help</Link>,
	  },
	];
  
	return (
		<>
		</>
	//   <AntHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
	// 	<div style={{ display: 'flex', alignItems: 'center' }}>
	// 	  <Link href="/">
	// 		<img src="/logo.svg" alt="Логотип" style={{ height: 32, marginRight: 16 }} />
	// 	  </Link>
	// 	  <a href="tel:+78005553535" aria-label="Номер телефона" style={{ color: '#fff', marginRight: 24 }}>
	// 		+7 (800) 555-35-35
	// 	  </a>
	// 	</div>
	// 	<Menu
	// 	  mode="horizontal"
	// 	  items={menuItems}
	// 	  selectedKeys={[pathname]}
	// 	  style={{ lineHeight: '64px', borderBottom: 'none', display: 'none' }}
	// 	/>
	// 	<Button type="primary" style={{ marginLeft: 16 }} aria-label="Оставить заявку">
	// 	  Оставить заявку
	// 	</Button>
	// 	<Button type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{ marginLeft: 16, color: '#fff' }} />
	// 	<Drawer title="Навигация" placement="right" onClose={onClose} open={visible}>
	// 	  <Menu
	// 		mode="inline"
	// 		items={menuItems}
	// 		selectedKeys={[pathname]}
	// 		style={{ borderRight: 'none' }}
	// 	  />
	// 	</Drawer>
	//   </AntHeader>
	);
  };
