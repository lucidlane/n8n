import {
	TicketProperties,
} from '../../Interfaces';

export const ticketGetAllDescription: TicketProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
		default: 25,
		description: 'Limit the number of rows returned',
	},
	{
		displayName: 'Filters',
		name: 'additionalFilters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: [
					'ticket',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Search Query',
				name: 'query',
				type: 'string',
				default: '',
				placeholder: 'John Doe',
				description: 'Search query, it can be anything related to ticket data like user etc.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'New',
						value: 'New',
					},
					{
						name: 'In Progress',
						value: 'In Progress',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
					{
						name: 'Waiting for Parts',
						value: 'Waiting for Parts',
					},
					{
						name: 'Waiting on Customer',
						value: 'Waiting on Customer',
					},
					{
						name: 'Scheduled',
						value: 'Scheduled',
					},
					{
						name: 'Customer Reply',
						value: 'Customer Reply',
					},
				],
				default: 'New',
			},
		],
	},
];