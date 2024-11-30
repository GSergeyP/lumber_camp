enum RoutePath {
  HOME = '/',
  COMPANY = '/company',
  DELIVERY_PAYMENT = '/delivery_payment',
  CONTACTS = '/contacts',
  PRODUCTS = '/products',
  NOTFOUND = '/:pathMatch(.*)*'
}

enum RouteName {
  HOME = 'home',
  COMPANY = 'company',
  DELIVERY_PAYMENT = 'delivery_payment',
  CONTACTS = 'contacts',
  PRODUCTS = 'products',
  NOTFOUND = 'not-found'
}

enum RouteTitle {
  HOME = 'Главная',
  COMPANY = 'О Компании',
  DELIVERY_PAYMENT = 'Доставка и Оплата',
  CONTACTS = 'Контакты',
}

enum RouteParams {
  PRODUCT = 'product'
}

enum RouteParamsValue {
  SAWMILL = 'sawmill',
  COAL = 'coal',
  LUMBER = 'lumber',
  PALLET = 'pallet',
  WOOD = 'wood'
}

enum RouteParamsTitle {
  SAWMILL = 'Пиловочник',
  COAL = 'Уголь',
  LUMBER = 'Пиломатериалы',
  PALLET = 'Европоддоны',
  WOOD = 'Тех. Дрова'
}

export { RoutePath, RouteName, RouteTitle, RouteParams, RouteParamsValue, RouteParamsTitle };
