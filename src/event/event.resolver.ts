import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Event } from './event.entity';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Resolver(() => Event)
export class EventResolver {
  constructor(private eventService: EventService) {}

  @Query(() => Event)
  async getEventById(@Args('id', { type: () => String }) id: string) {
    return await this.eventService.getEventById(id);
  }

  @Query(() => [Event])
  async getAllEvents() {
    return await this.eventService.getAllEvents();
  }

  @Mutation(() => Event)
  async createEvent(@Args('createEventInput') createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Mutation(() => Event)
  async updateEvent(
    @Args('id', { type: () => String }) id: string,
    @Args('updateEventInput') updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.update(id, updateEventDto);
  }

  @Mutation(() => Boolean)
  async removeEvent(@Args('id', { type: () => String }) id: string) {
    await this.eventService.delete(id);
    return true;
  }
}
