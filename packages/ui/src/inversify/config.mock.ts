import { ICardsRepository } from "@flash-cards/repositories";
import { Container } from "inversify";
import { CardsRepositoryMock } from "../__mocks__/CardsRepositoryMock";
import { ServiceType } from "./ServiceType";

var mockContainer = new Container();

mockContainer
  .bind<ICardsRepository>(ServiceType.CardsRepository)
  .to(CardsRepositoryMock);

export { mockContainer };
