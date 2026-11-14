import type {
	EmptyRequest,
	EmptyResponse,
	AdminAbuseReportNotificationRecipientCreateRequest,
	AdminAbuseReportNotificationRecipientCreateResponse,
	AdminAbuseReportNotificationRecipientDeleteRequest,
	AdminAbuseReportNotificationRecipientListRequest,
	AdminAbuseReportNotificationRecipientListResponse,
	AdminAbuseReportNotificationRecipientShowRequest,
	AdminAbuseReportNotificationRecipientShowResponse,
	AdminAbuseReportNotificationRecipientUpdateRequest,
	AdminAbuseReportNotificationRecipientUpdateResponse,
	AdminAbuseUserReportsRequest,
	AdminAbuseUserReportsResponse,
	AdminAccountsCreateRequest,
	AdminAccountsCreateResponse,
	AdminAccountsDeleteRequest,
	AdminAccountsFindByEmailRequest,
	AdminAccountsFindByEmailResponse,
	AdminAdCreateRequest,
	AdminAdCreateResponse,
	AdminAdDeleteRequest,
	AdminAdListRequest,
	AdminAdListResponse,
	AdminAdUpdateRequest,
	AdminCaptchaCurrentResponse,
	AdminCaptchaSaveRequest,
	AdminDeleteAccountRequest,
	AdminDeleteAllFilesOfAUserRequest,
	AdminDriveFilesRequest,
	AdminDriveFilesResponse,
	AdminDriveShowFileRequest,
	AdminDriveShowFileResponse,
	AdminEmojiAddRequest,
	AdminEmojiAddResponse,
	AdminEmojiAddAliasesBulkRequest,
	AdminEmojiCopyRequest,
	AdminEmojiCopyResponse,
	AdminEmojiDeleteRequest,
	AdminEmojiDeleteBulkRequest,
	AdminEmojiImportZipRequest,
	AdminEmojiListRequest,
	AdminEmojiListResponse,
	AdminEmojiListRemoteRequest,
	AdminEmojiListRemoteResponse,
	AdminEmojiRemoveAliasesBulkRequest,
	AdminEmojiSetAliasesBulkRequest,
	AdminEmojiSetCategoryBulkRequest,
	AdminEmojiSetLicenseBulkRequest,
	AdminEmojiUpdateRequest,
	AdminFederationDeleteAllFilesRequest,
	AdminFederationRefreshRemoteInstanceMetadataRequest,
	AdminFederationRemoveAllFollowingRequest,
	AdminFederationUpdateInstanceRequest,
	AdminForwardAbuseUserReportRequest,
	AdminGetIndexStatsResponse,
	AdminGetTableStatsResponse,
	AdminGetUserIpsRequest,
	AdminGetUserIpsResponse,
	AdminInviteCreateRequest,
	AdminInviteCreateResponse,
	AdminInviteListRequest,
	AdminInviteListResponse,
	AdminMetaResponse,
	AdminPromoCreateRequest,
	AdminQueueClearRequest,
	AdminQueueDeliverDelayedResponse,
	AdminQueueInboxDelayedResponse,
	AdminQueueJobsRequest,
	AdminQueueJobsResponse,
	AdminQueuePauseRequest,
	AdminQueuePromoteJobsRequest,
	AdminQueueQueueStatsRequest,
	AdminQueueQueueStatsResponse,
	AdminQueueQueuesResponse,
	AdminQueueRemoveJobRequest,
	AdminQueueResumeRequest,
	AdminQueueRetryJobRequest,
	AdminQueueShowJobRequest,
	AdminQueueShowJobResponse,
	AdminQueueShowJobLogsRequest,
	AdminQueueShowJobLogsResponse,
	AdminQueueStatsResponse,
	AdminRelaysAddRequest,
	AdminRelaysAddResponse,
	AdminRelaysListResponse,
	AdminRelaysRemoveRequest,
	AdminResetPasswordRequest,
	AdminResetPasswordResponse,
	AdminResolveAbuseUserReportRequest,
	AdminRolesAssignRequest,
	AdminRolesCreateRequest,
	AdminRolesCreateResponse,
	AdminRolesDeleteRequest,
	AdminRolesListResponse,
	AdminRolesShowRequest,
	AdminRolesShowResponse,
	AdminRolesUnassignRequest,
	AdminRolesUpdateRequest,
	AdminRolesUpdateDefaultPoliciesRequest,
	AdminRolesUsersRequest,
	AdminRolesUsersResponse,
	AdminSendEmailRequest,
	AdminServerInfoResponse,
	AdminShowModerationLogsRequest,
	AdminShowModerationLogsResponse,
	AdminShowUserRequest,
	AdminShowUserResponse,
	AdminShowUsersRequest,
	AdminShowUsersResponse,
	AdminSuspendUserRequest,
	AdminSystemWebhookCreateRequest,
	AdminSystemWebhookCreateResponse,
	AdminSystemWebhookDeleteRequest,
	AdminSystemWebhookListRequest,
	AdminSystemWebhookListResponse,
	AdminSystemWebhookShowRequest,
	AdminSystemWebhookShowResponse,
	AdminSystemWebhookTestRequest,
	AdminSystemWebhookUpdateRequest,
	AdminSystemWebhookUpdateResponse,
	AdminUnsetMfaRequest,
	AdminUnsetUserAvatarRequest,
	AdminUnsetUserBannerRequest,
	AdminUnsuspendUserRequest,
	AdminUpdateAbuseUserReportRequest,
	AdminUpdateMetaRequest,
	AdminUpdateProxyAccountRequest,
	AdminUpdateProxyAccountResponse,
	AdminUpdateUserNoteRequest,
	ApGetRequest,
	ApGetResponse,
	ApShowRequest,
	ApShowResponse,
	AppCreateRequest,
	AppCreateResponse,
	AppShowRequest,
	AppShowResponse,
	AuthAcceptRequest,
	AuthSessionGenerateRequest,
	AuthSessionGenerateResponse,
	AuthSessionShowRequest,
	AuthSessionShowResponse,
	AuthSessionUserkeyRequest,
	AuthSessionUserkeyResponse,
	BlockingCreateRequest,
	BlockingCreateResponse,
	BlockingDeleteRequest,
	BlockingDeleteResponse,
	BlockingListRequest,
	BlockingListResponse,
	ChartsActiveUsersRequest,
	ChartsActiveUsersResponse,
	ChartsApRequestRequest,
	ChartsApRequestResponse,
	ChartsDriveRequest,
	ChartsDriveResponse,
	ChartsFederationRequest,
	ChartsFederationResponse,
	ChartsInstanceRequest,
	ChartsInstanceResponse,
	ChartsNotesRequest,
	ChartsNotesResponse,
	ChartsUserDriveRequest,
	ChartsUserDriveResponse,
	ChartsUserFollowingRequest,
	ChartsUserFollowingResponse,
	ChartsUserNotesRequest,
	ChartsUserNotesResponse,
	ChartsUserPvRequest,
	ChartsUserPvResponse,
	ChartsUserReactionsRequest,
	ChartsUserReactionsResponse,
	ChartsUsersRequest,
	ChartsUsersResponse,
	ClipsAddNoteRequest,
	ClipsCreateRequest,
	ClipsCreateResponse,
	ClipsDeleteRequest,
	ClipsFavoriteRequest,
	ClipsListRequest,
	ClipsListResponse,
	ClipsMyFavoritesResponse,
	ClipsNotesRequest,
	ClipsNotesResponse,
	ClipsRemoveNoteRequest,
	ClipsShowRequest,
	ClipsShowResponse,
	ClipsUnfavoriteRequest,
	ClipsUpdateRequest,
	ClipsUpdateResponse,
	DriveResponse,
	DriveFilesRequest,
	DriveFilesResponse,
	DriveFilesAttachedNotesRequest,
	DriveFilesAttachedNotesResponse,
	DriveFilesCheckExistenceRequest,
	DriveFilesCheckExistenceResponse,
	DriveFilesCreateRequest,
	DriveFilesCreateResponse,
	DriveFilesDeleteRequest,
	DriveFilesFindRequest,
	DriveFilesFindResponse,
	DriveFilesFindByHashRequest,
	DriveFilesFindByHashResponse,
	DriveFilesMoveBulkRequest,
	DriveFilesShowRequest,
	DriveFilesShowResponse,
	DriveFilesUpdateRequest,
	DriveFilesUpdateResponse,
	DriveFilesUploadFromUrlRequest,
	DriveFoldersRequest,
	DriveFoldersResponse,
	DriveFoldersCreateRequest,
	DriveFoldersCreateResponse,
	DriveFoldersDeleteRequest,
	DriveFoldersFindRequest,
	DriveFoldersFindResponse,
	DriveFoldersShowRequest,
	DriveFoldersShowResponse,
	DriveFoldersUpdateRequest,
	DriveFoldersUpdateResponse,
	DriveStreamRequest,
	DriveStreamResponse,
	EmailAddressAvailableRequest,
	EmailAddressAvailableResponse,
	EmojiRequest,
	EmojiResponse,
	EmojisResponse,
	EndpointRequest,
	EndpointResponse,
	EndpointsResponse,
	FederationFollowersRequest,
	FederationFollowersResponse,
	FederationFollowingRequest,
	FederationFollowingResponse,
	FederationInstancesRequest,
	FederationInstancesResponse,
	FederationShowInstanceRequest,
	FederationShowInstanceResponse,
	FederationStatsRequest,
	FederationStatsResponse,
	FederationUpdateRemoteUserRequest,
	FederationUsersRequest,
	FederationUsersResponse,
	FetchExternalResourcesRequest,
	FetchExternalResourcesResponse,
	FollowingCreateRequest,
	FollowingCreateResponse,
	FollowingDeleteRequest,
	FollowingDeleteResponse,
	FollowingInvalidateRequest,
	FollowingInvalidateResponse,
	FollowingListRequest,
	FollowingListResponse,
	FollowingRequestsAcceptRequest,
	FollowingRequestsCancelRequest,
	FollowingRequestsCancelResponse,
	FollowingRequestsListRequest,
	FollowingRequestsListResponse,
	FollowingRequestsRejectRequest,
	FollowingRequestsSentRequest,
	FollowingRequestsSentResponse,
	FollowingUpdateRequest,
	FollowingUpdateResponse,
	FollowingUpdateAllRequest,
	GetOnlineUsersCountResponse,
	HashtagsListRequest,
	HashtagsListResponse,
	HashtagsSearchRequest,
	HashtagsSearchResponse,
	HashtagsShowRequest,
	HashtagsShowResponse,
	HashtagsTrendResponse,
	HashtagsUsersRequest,
	HashtagsUsersResponse,
	IResponse,
	I2faDoneRequest,
	I2faDoneResponse,
	I2faKeyDoneRequest,
	I2faKeyDoneResponse,
	I2faPasswordLessRequest,
	I2faRegisterRequest,
	I2faRegisterResponse,
	I2faRegisterKeyRequest,
	I2faRegisterKeyResponse,
	I2faRemoveKeyRequest,
	I2faUnregisterRequest,
	I2faUpdateKeyRequest,
	IAppsRequest,
	IAppsResponse,
	IAuthorizedAppsRequest,
	IAuthorizedAppsResponse,
	IChangePasswordRequest,
	IDeleteAccountRequest,
	IExportFollowingRequest,
	IImportBlockingRequest,
	IImportFollowingRequest,
	IImportMutingRequest,
	IMoveRequest,
	IMoveResponse,
	INotificationsRequest,
	INotificationsResponse,
	INotificationsGroupedRequest,
	INotificationsGroupedResponse,
	IPinRequest,
	IPinResponse,
	IRegenerateTokenRequest,
	IRegistryGetRequest,
	IRegistryGetResponse,
	IRegistryGetAllRequest,
	IRegistryGetAllResponse,
	IRegistryGetDetailRequest,
	IRegistryGetDetailResponse,
	IRegistryKeysRequest,
	IRegistryKeysResponse,
	IRegistryKeysWithTypeRequest,
	IRegistryKeysWithTypeResponse,
	IRegistryRemoveRequest,
	IRegistryScopesWithDomainResponse,
	IRegistrySetRequest,
	IRevokeTokenRequest,
	ISigninHistoryRequest,
	ISigninHistoryResponse,
	IUnpinRequest,
	IUnpinResponse,
	IUpdateRequest,
	IUpdateResponse,
	IUpdateEmailRequest,
	IUpdateEmailResponse,
	IWebhooksCreateRequest,
	IWebhooksCreateResponse,
	IWebhooksDeleteRequest,
	IWebhooksListResponse,
	IWebhooksShowRequest,
	IWebhooksShowResponse,
	IWebhooksTestRequest,
	IWebhooksUpdateRequest,
	InviteCreateResponse,
	InviteDeleteRequest,
	InviteLimitResponse,
	InviteListRequest,
	InviteListResponse,
	MetaRequest,
	MetaResponse,
	MiauthGenTokenRequest,
	MiauthGenTokenResponse,
	MuteCreateRequest,
	MuteDeleteRequest,
	MuteListRequest,
	MuteListResponse,
	MyAppsRequest,
	MyAppsResponse,
	NotesRequest,
	NotesResponse,
	NotesChildrenRequest,
	NotesChildrenResponse,
	NotesClipsRequest,
	NotesClipsResponse,
	NotesConversationRequest,
	NotesConversationResponse,
	NotesCreateRequest,
	NotesCreateResponse,
	NotesDeleteRequest,
	NotesDraftsCountResponse,
	NotesDraftsCreateRequest,
	NotesDraftsCreateResponse,
	NotesDraftsDeleteRequest,
	NotesDraftsListRequest,
	NotesDraftsListResponse,
	NotesDraftsUpdateRequest,
	NotesDraftsUpdateResponse,
	NotesFeaturedRequest,
	NotesFeaturedResponse,
	NotesGlobalTimelineRequest,
	NotesGlobalTimelineResponse,
	NotesHybridTimelineRequest,
	NotesHybridTimelineResponse,
	NotesLocalTimelineRequest,
	NotesLocalTimelineResponse,
	NotesMentionsRequest,
	NotesMentionsResponse,
	NotesPollsRecommendationRequest,
	NotesPollsRecommendationResponse,
	NotesPollsVoteRequest,
	NotesReactionsRequest,
	NotesReactionsResponse,
	NotesReactionsCreateRequest,
	NotesReactionsDeleteRequest,
	NotesRenotesRequest,
	NotesRenotesResponse,
	NotesRepliesRequest,
	NotesRepliesResponse,
	NotesSearchRequest,
	NotesSearchResponse,
	NotesSearchByTagRequest,
	NotesSearchByTagResponse,
	NotesShowRequest,
	NotesShowResponse,
	NotesShowPartialBulkRequest,
	NotesShowPartialBulkResponse,
	NotesStateRequest,
	NotesStateResponse,
	NotesThreadMutingCreateRequest,
	NotesThreadMutingDeleteRequest,
	NotesTimelineRequest,
	NotesTimelineResponse,
	NotesTranslateRequest,
	NotesTranslateResponse,
	NotesUnrenoteRequest,
	NotificationsCreateRequest,
	PingResponse,
	PinnedUsersResponse,
	PromoReadRequest,
	RenoteMuteCreateRequest,
	RenoteMuteDeleteRequest,
	RenoteMuteListRequest,
	RenoteMuteListResponse,
	RequestResetPasswordRequest,
	ResetPasswordRequest,
	RetentionResponse,
	RolesListResponse,
	RolesNotesRequest,
	RolesNotesResponse,
	RolesShowRequest,
	RolesShowResponse,
	RolesUsersRequest,
	RolesUsersResponse,
	ServerInfoResponse,
	StatsResponse,
	SwRegisterRequest,
	SwRegisterResponse,
	SwShowRegistrationRequest,
	SwShowRegistrationResponse,
	SwUnregisterRequest,
	SwUpdateRegistrationRequest,
	SwUpdateRegistrationResponse,
	TestRequest,
	TestResponse,
	UsernameAvailableRequest,
	UsernameAvailableResponse,
	UsersRequest,
	UsersResponse,
	UsersClipsRequest,
	UsersClipsResponse,
	UsersFeaturedNotesRequest,
	UsersFeaturedNotesResponse,
	UsersFollowersRequest,
	UsersFollowersResponse,
	UsersFollowingRequest,
	UsersFollowingResponse,
	UsersGetFollowingUsersByBirthdayRequest,
	UsersGetFollowingUsersByBirthdayResponse,
	UsersGetFrequentlyRepliedUsersRequest,
	UsersGetFrequentlyRepliedUsersResponse,
	UsersNotesRequest,
	UsersNotesResponse,
	UsersReactionsRequest,
	UsersReactionsResponse,
	UsersRelationRequest,
	UsersRelationResponse,
	UsersReportAbuseRequest,
	UsersSearchRequest,
	UsersSearchResponse,
	UsersSearchByUsernameAndHostRequest,
	UsersSearchByUsernameAndHostResponse,
	UsersShowRequest,
	UsersShowResponse,
	UsersUpdateMemoRequest,
	V2AdminEmojiListRequest,
	V2AdminEmojiListResponse,
	VerifyEmailRequest,
} from './entities.js';

export type Endpoints = {
	'admin/abuse-report/notification-recipient/create': { req: AdminAbuseReportNotificationRecipientCreateRequest; res: AdminAbuseReportNotificationRecipientCreateResponse };
	'admin/abuse-report/notification-recipient/delete': { req: AdminAbuseReportNotificationRecipientDeleteRequest; res: EmptyResponse };
	'admin/abuse-report/notification-recipient/list': { req: AdminAbuseReportNotificationRecipientListRequest; res: AdminAbuseReportNotificationRecipientListResponse };
	'admin/abuse-report/notification-recipient/show': { req: AdminAbuseReportNotificationRecipientShowRequest; res: AdminAbuseReportNotificationRecipientShowResponse };
	'admin/abuse-report/notification-recipient/update': { req: AdminAbuseReportNotificationRecipientUpdateRequest; res: AdminAbuseReportNotificationRecipientUpdateResponse };
	'admin/abuse-user-reports': { req: AdminAbuseUserReportsRequest; res: AdminAbuseUserReportsResponse };
	'admin/accounts/create': { req: AdminAccountsCreateRequest; res: AdminAccountsCreateResponse };
	'admin/accounts/delete': { req: AdminAccountsDeleteRequest; res: EmptyResponse };
	'admin/accounts/find-by-email': { req: AdminAccountsFindByEmailRequest; res: AdminAccountsFindByEmailResponse };
	'admin/ad/create': { req: AdminAdCreateRequest; res: AdminAdCreateResponse };
	'admin/ad/delete': { req: AdminAdDeleteRequest; res: EmptyResponse };
	'admin/ad/list': { req: AdminAdListRequest; res: AdminAdListResponse };
	'admin/ad/update': { req: AdminAdUpdateRequest; res: EmptyResponse };
	'admin/captcha/current': { req: EmptyRequest; res: AdminCaptchaCurrentResponse };
	'admin/captcha/save': { req: AdminCaptchaSaveRequest; res: EmptyResponse };
	'admin/delete-account': { req: AdminDeleteAccountRequest; res: EmptyResponse };
	'admin/delete-all-files-of-a-user': { req: AdminDeleteAllFilesOfAUserRequest; res: EmptyResponse };
	'admin/drive/clean-remote-files': { req: EmptyRequest; res: EmptyResponse };
	'admin/drive/cleanup': { req: EmptyRequest; res: EmptyResponse };
	'admin/drive/files': { req: AdminDriveFilesRequest; res: AdminDriveFilesResponse };
	'admin/drive/show-file': { req: AdminDriveShowFileRequest; res: AdminDriveShowFileResponse };
	'admin/emoji/add': { req: AdminEmojiAddRequest; res: AdminEmojiAddResponse };
	'admin/emoji/add-aliases-bulk': { req: AdminEmojiAddAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/copy': { req: AdminEmojiCopyRequest; res: AdminEmojiCopyResponse };
	'admin/emoji/delete': { req: AdminEmojiDeleteRequest; res: EmptyResponse };
	'admin/emoji/delete-bulk': { req: AdminEmojiDeleteBulkRequest; res: EmptyResponse };
	'admin/emoji/import-zip': { req: AdminEmojiImportZipRequest; res: EmptyResponse };
	'admin/emoji/list': { req: AdminEmojiListRequest; res: AdminEmojiListResponse };
	'admin/emoji/list-remote': { req: AdminEmojiListRemoteRequest; res: AdminEmojiListRemoteResponse };
	'admin/emoji/remove-aliases-bulk': { req: AdminEmojiRemoveAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/set-aliases-bulk': { req: AdminEmojiSetAliasesBulkRequest; res: EmptyResponse };
	'admin/emoji/set-category-bulk': { req: AdminEmojiSetCategoryBulkRequest; res: EmptyResponse };
	'admin/emoji/set-license-bulk': { req: AdminEmojiSetLicenseBulkRequest; res: EmptyResponse };
	'admin/emoji/update': { req: AdminEmojiUpdateRequest; res: EmptyResponse };
	'admin/federation/delete-all-files': { req: AdminFederationDeleteAllFilesRequest; res: EmptyResponse };
	'admin/federation/refresh-remote-instance-metadata': { req: AdminFederationRefreshRemoteInstanceMetadataRequest; res: EmptyResponse };
	'admin/federation/remove-all-following': { req: AdminFederationRemoveAllFollowingRequest; res: EmptyResponse };
	'admin/federation/update-instance': { req: AdminFederationUpdateInstanceRequest; res: EmptyResponse };
	'admin/forward-abuse-user-report': { req: AdminForwardAbuseUserReportRequest; res: EmptyResponse };
	'admin/get-index-stats': { req: EmptyRequest; res: AdminGetIndexStatsResponse };
	'admin/get-table-stats': { req: EmptyRequest; res: AdminGetTableStatsResponse };
	'admin/get-user-ips': { req: AdminGetUserIpsRequest; res: AdminGetUserIpsResponse };
	'admin/invite/create': { req: AdminInviteCreateRequest; res: AdminInviteCreateResponse };
	'admin/invite/list': { req: AdminInviteListRequest; res: AdminInviteListResponse };
	'admin/meta': { req: EmptyRequest; res: AdminMetaResponse };
	'admin/promo/create': { req: AdminPromoCreateRequest; res: EmptyResponse };
	'admin/queue/clear': { req: AdminQueueClearRequest; res: EmptyResponse };
	'admin/queue/deliver-delayed': { req: EmptyRequest; res: AdminQueueDeliverDelayedResponse };
	'admin/queue/inbox-delayed': { req: EmptyRequest; res: AdminQueueInboxDelayedResponse };
	'admin/queue/jobs': { req: AdminQueueJobsRequest; res: AdminQueueJobsResponse };
	'admin/queue/pause': { req: AdminQueuePauseRequest; res: EmptyResponse };
	'admin/queue/promote-jobs': { req: AdminQueuePromoteJobsRequest; res: EmptyResponse };
	'admin/queue/queue-stats': { req: AdminQueueQueueStatsRequest; res: AdminQueueQueueStatsResponse };
	'admin/queue/queues': { req: EmptyRequest; res: AdminQueueQueuesResponse };
	'admin/queue/remove-job': { req: AdminQueueRemoveJobRequest; res: EmptyResponse };
	'admin/queue/resume': { req: AdminQueueResumeRequest; res: EmptyResponse };
	'admin/queue/retry-job': { req: AdminQueueRetryJobRequest; res: EmptyResponse };
	'admin/queue/show-job': { req: AdminQueueShowJobRequest; res: AdminQueueShowJobResponse };
	'admin/queue/show-job-logs': { req: AdminQueueShowJobLogsRequest; res: AdminQueueShowJobLogsResponse };
	'admin/queue/stats': { req: EmptyRequest; res: AdminQueueStatsResponse };
	'admin/relays/add': { req: AdminRelaysAddRequest; res: AdminRelaysAddResponse };
	'admin/relays/list': { req: EmptyRequest; res: AdminRelaysListResponse };
	'admin/relays/remove': { req: AdminRelaysRemoveRequest; res: EmptyResponse };
	'admin/reset-password': { req: AdminResetPasswordRequest; res: AdminResetPasswordResponse };
	'admin/resolve-abuse-user-report': { req: AdminResolveAbuseUserReportRequest; res: EmptyResponse };
	'admin/roles/assign': { req: AdminRolesAssignRequest; res: EmptyResponse };
	'admin/roles/create': { req: AdminRolesCreateRequest; res: AdminRolesCreateResponse };
	'admin/roles/delete': { req: AdminRolesDeleteRequest; res: EmptyResponse };
	'admin/roles/list': { req: EmptyRequest; res: AdminRolesListResponse };
	'admin/roles/show': { req: AdminRolesShowRequest; res: AdminRolesShowResponse };
	'admin/roles/unassign': { req: AdminRolesUnassignRequest; res: EmptyResponse };
	'admin/roles/update': { req: AdminRolesUpdateRequest; res: EmptyResponse };
	'admin/roles/update-default-policies': { req: AdminRolesUpdateDefaultPoliciesRequest; res: EmptyResponse };
	'admin/roles/users': { req: AdminRolesUsersRequest; res: AdminRolesUsersResponse };
	'admin/send-email': { req: AdminSendEmailRequest; res: EmptyResponse };
	'admin/server-info': { req: EmptyRequest; res: AdminServerInfoResponse };
	'admin/show-moderation-logs': { req: AdminShowModerationLogsRequest; res: AdminShowModerationLogsResponse };
	'admin/show-user': { req: AdminShowUserRequest; res: AdminShowUserResponse };
	'admin/show-users': { req: AdminShowUsersRequest; res: AdminShowUsersResponse };
	'admin/suspend-user': { req: AdminSuspendUserRequest; res: EmptyResponse };
	'admin/system-webhook/create': { req: AdminSystemWebhookCreateRequest; res: AdminSystemWebhookCreateResponse };
	'admin/system-webhook/delete': { req: AdminSystemWebhookDeleteRequest; res: EmptyResponse };
	'admin/system-webhook/list': { req: AdminSystemWebhookListRequest; res: AdminSystemWebhookListResponse };
	'admin/system-webhook/show': { req: AdminSystemWebhookShowRequest; res: AdminSystemWebhookShowResponse };
	'admin/system-webhook/test': { req: AdminSystemWebhookTestRequest; res: EmptyResponse };
	'admin/system-webhook/update': { req: AdminSystemWebhookUpdateRequest; res: AdminSystemWebhookUpdateResponse };
	'admin/unset-mfa': { req: AdminUnsetMfaRequest; res: EmptyResponse };
	'admin/unset-user-avatar': { req: AdminUnsetUserAvatarRequest; res: EmptyResponse };
	'admin/unset-user-banner': { req: AdminUnsetUserBannerRequest; res: EmptyResponse };
	'admin/unsuspend-user': { req: AdminUnsuspendUserRequest; res: EmptyResponse };
	'admin/update-abuse-user-report': { req: AdminUpdateAbuseUserReportRequest; res: EmptyResponse };
	'admin/update-meta': { req: AdminUpdateMetaRequest; res: EmptyResponse };
	'admin/update-proxy-account': { req: AdminUpdateProxyAccountRequest; res: AdminUpdateProxyAccountResponse };
	'admin/update-user-note': { req: AdminUpdateUserNoteRequest; res: EmptyResponse };
	'ap/get': { req: ApGetRequest; res: ApGetResponse };
	'ap/show': { req: ApShowRequest; res: ApShowResponse };
	'app/create': { req: AppCreateRequest; res: AppCreateResponse };
	'app/show': { req: AppShowRequest; res: AppShowResponse };
	'auth/accept': { req: AuthAcceptRequest; res: EmptyResponse };
	'auth/session/generate': { req: AuthSessionGenerateRequest; res: AuthSessionGenerateResponse };
	'auth/session/show': { req: AuthSessionShowRequest; res: AuthSessionShowResponse };
	'auth/session/userkey': { req: AuthSessionUserkeyRequest; res: AuthSessionUserkeyResponse };
	'blocking/create': { req: BlockingCreateRequest; res: BlockingCreateResponse };
	'blocking/delete': { req: BlockingDeleteRequest; res: BlockingDeleteResponse };
	'blocking/list': { req: BlockingListRequest; res: BlockingListResponse };
	'charts/active-users': { req: ChartsActiveUsersRequest; res: ChartsActiveUsersResponse };
	'charts/ap-request': { req: ChartsApRequestRequest; res: ChartsApRequestResponse };
	'charts/drive': { req: ChartsDriveRequest; res: ChartsDriveResponse };
	'charts/federation': { req: ChartsFederationRequest; res: ChartsFederationResponse };
	'charts/instance': { req: ChartsInstanceRequest; res: ChartsInstanceResponse };
	'charts/notes': { req: ChartsNotesRequest; res: ChartsNotesResponse };
	'charts/user/drive': { req: ChartsUserDriveRequest; res: ChartsUserDriveResponse };
	'charts/user/following': { req: ChartsUserFollowingRequest; res: ChartsUserFollowingResponse };
	'charts/user/notes': { req: ChartsUserNotesRequest; res: ChartsUserNotesResponse };
	'charts/user/pv': { req: ChartsUserPvRequest; res: ChartsUserPvResponse };
	'charts/user/reactions': { req: ChartsUserReactionsRequest; res: ChartsUserReactionsResponse };
	'charts/users': { req: ChartsUsersRequest; res: ChartsUsersResponse };
	'clips/add-note': { req: ClipsAddNoteRequest; res: EmptyResponse };
	'clips/create': { req: ClipsCreateRequest; res: ClipsCreateResponse };
	'clips/delete': { req: ClipsDeleteRequest; res: EmptyResponse };
	'clips/favorite': { req: ClipsFavoriteRequest; res: EmptyResponse };
	'clips/list': { req: ClipsListRequest; res: ClipsListResponse };
	'clips/my-favorites': { req: EmptyRequest; res: ClipsMyFavoritesResponse };
	'clips/notes': { req: ClipsNotesRequest; res: ClipsNotesResponse };
	'clips/remove-note': { req: ClipsRemoveNoteRequest; res: EmptyResponse };
	'clips/show': { req: ClipsShowRequest; res: ClipsShowResponse };
	'clips/unfavorite': { req: ClipsUnfavoriteRequest; res: EmptyResponse };
	'clips/update': { req: ClipsUpdateRequest; res: ClipsUpdateResponse };
	'drive': { req: EmptyRequest; res: DriveResponse };
	'drive/files': { req: DriveFilesRequest; res: DriveFilesResponse };
	'drive/files/attached-notes': { req: DriveFilesAttachedNotesRequest; res: DriveFilesAttachedNotesResponse };
	'drive/files/check-existence': { req: DriveFilesCheckExistenceRequest; res: DriveFilesCheckExistenceResponse };
	'drive/files/create': { req: DriveFilesCreateRequest; res: DriveFilesCreateResponse };
	'drive/files/delete': { req: DriveFilesDeleteRequest; res: EmptyResponse };
	'drive/files/find': { req: DriveFilesFindRequest; res: DriveFilesFindResponse };
	'drive/files/find-by-hash': { req: DriveFilesFindByHashRequest; res: DriveFilesFindByHashResponse };
	'drive/files/move-bulk': { req: DriveFilesMoveBulkRequest; res: EmptyResponse };
	'drive/files/show': { req: DriveFilesShowRequest; res: DriveFilesShowResponse };
	'drive/files/update': { req: DriveFilesUpdateRequest; res: DriveFilesUpdateResponse };
	'drive/files/upload-from-url': { req: DriveFilesUploadFromUrlRequest; res: EmptyResponse };
	'drive/folders': { req: DriveFoldersRequest; res: DriveFoldersResponse };
	'drive/folders/create': { req: DriveFoldersCreateRequest; res: DriveFoldersCreateResponse };
	'drive/folders/delete': { req: DriveFoldersDeleteRequest; res: EmptyResponse };
	'drive/folders/find': { req: DriveFoldersFindRequest; res: DriveFoldersFindResponse };
	'drive/folders/show': { req: DriveFoldersShowRequest; res: DriveFoldersShowResponse };
	'drive/folders/update': { req: DriveFoldersUpdateRequest; res: DriveFoldersUpdateResponse };
	'drive/stream': { req: DriveStreamRequest; res: DriveStreamResponse };
	'email-address/available': { req: EmailAddressAvailableRequest; res: EmailAddressAvailableResponse };
	'emoji': { req: EmojiRequest; res: EmojiResponse };
	'emojis': { req: EmptyRequest; res: EmojisResponse };
	'endpoint': { req: EndpointRequest; res: EndpointResponse };
	'endpoints': { req: EmptyRequest; res: EndpointsResponse };
	'export-custom-emojis': { req: EmptyRequest; res: EmptyResponse };
	'federation/followers': { req: FederationFollowersRequest; res: FederationFollowersResponse };
	'federation/following': { req: FederationFollowingRequest; res: FederationFollowingResponse };
	'federation/instances': { req: FederationInstancesRequest; res: FederationInstancesResponse };
	'federation/show-instance': { req: FederationShowInstanceRequest; res: FederationShowInstanceResponse };
	'federation/stats': { req: FederationStatsRequest; res: FederationStatsResponse };
	'federation/update-remote-user': { req: FederationUpdateRemoteUserRequest; res: EmptyResponse };
	'federation/users': { req: FederationUsersRequest; res: FederationUsersResponse };
	'fetch-external-resources': { req: FetchExternalResourcesRequest; res: FetchExternalResourcesResponse };
	'following/create': { req: FollowingCreateRequest; res: FollowingCreateResponse };
	'following/delete': { req: FollowingDeleteRequest; res: FollowingDeleteResponse };
	'following/invalidate': { req: FollowingInvalidateRequest; res: FollowingInvalidateResponse };
	'following/list': { req: FollowingListRequest; res: FollowingListResponse };
	'following/requests/accept': { req: FollowingRequestsAcceptRequest; res: EmptyResponse };
	'following/requests/cancel': { req: FollowingRequestsCancelRequest; res: FollowingRequestsCancelResponse };
	'following/requests/list': { req: FollowingRequestsListRequest; res: FollowingRequestsListResponse };
	'following/requests/reject': { req: FollowingRequestsRejectRequest; res: EmptyResponse };
	'following/requests/sent': { req: FollowingRequestsSentRequest; res: FollowingRequestsSentResponse };
	'following/update': { req: FollowingUpdateRequest; res: FollowingUpdateResponse };
	'following/update-all': { req: FollowingUpdateAllRequest; res: EmptyResponse };
	'get-online-users-count': { req: EmptyRequest; res: GetOnlineUsersCountResponse };
	'hashtags/list': { req: HashtagsListRequest; res: HashtagsListResponse };
	'hashtags/search': { req: HashtagsSearchRequest; res: HashtagsSearchResponse };
	'hashtags/show': { req: HashtagsShowRequest; res: HashtagsShowResponse };
	'hashtags/trend': { req: EmptyRequest; res: HashtagsTrendResponse };
	'hashtags/users': { req: HashtagsUsersRequest; res: HashtagsUsersResponse };
	'i': { req: EmptyRequest; res: IResponse };
	'i/2fa/done': { req: I2faDoneRequest; res: I2faDoneResponse };
	'i/2fa/key-done': { req: I2faKeyDoneRequest; res: I2faKeyDoneResponse };
	'i/2fa/password-less': { req: I2faPasswordLessRequest; res: EmptyResponse };
	'i/2fa/register': { req: I2faRegisterRequest; res: I2faRegisterResponse };
	'i/2fa/register-key': { req: I2faRegisterKeyRequest; res: I2faRegisterKeyResponse };
	'i/2fa/remove-key': { req: I2faRemoveKeyRequest; res: EmptyResponse };
	'i/2fa/unregister': { req: I2faUnregisterRequest; res: EmptyResponse };
	'i/2fa/update-key': { req: I2faUpdateKeyRequest; res: EmptyResponse };
	'i/apps': { req: IAppsRequest; res: IAppsResponse };
	'i/authorized-apps': { req: IAuthorizedAppsRequest; res: IAuthorizedAppsResponse };
	'i/change-password': { req: IChangePasswordRequest; res: EmptyResponse };
	'i/delete-account': { req: IDeleteAccountRequest; res: EmptyResponse };
	'i/export-blocking': { req: EmptyRequest; res: EmptyResponse };
	'i/export-clips': { req: EmptyRequest; res: EmptyResponse };
	'i/export-following': { req: IExportFollowingRequest; res: EmptyResponse };
	'i/export-mute': { req: EmptyRequest; res: EmptyResponse };
	'i/export-notes': { req: EmptyRequest; res: EmptyResponse };
	'i/import-blocking': { req: IImportBlockingRequest; res: EmptyResponse };
	'i/import-following': { req: IImportFollowingRequest; res: EmptyResponse };
	'i/import-muting': { req: IImportMutingRequest; res: EmptyResponse };
	'i/move': { req: IMoveRequest; res: IMoveResponse };
	'i/notifications': { req: INotificationsRequest; res: INotificationsResponse };
	'i/notifications-grouped': { req: INotificationsGroupedRequest; res: INotificationsGroupedResponse };
	'i/pin': { req: IPinRequest; res: IPinResponse };
	'i/regenerate-token': { req: IRegenerateTokenRequest; res: EmptyResponse };
	'i/registry/get': { req: IRegistryGetRequest; res: IRegistryGetResponse };
	'i/registry/get-all': { req: IRegistryGetAllRequest; res: IRegistryGetAllResponse };
	'i/registry/get-detail': { req: IRegistryGetDetailRequest; res: IRegistryGetDetailResponse };
	'i/registry/keys': { req: IRegistryKeysRequest; res: IRegistryKeysResponse };
	'i/registry/keys-with-type': { req: IRegistryKeysWithTypeRequest; res: IRegistryKeysWithTypeResponse };
	'i/registry/remove': { req: IRegistryRemoveRequest; res: EmptyResponse };
	'i/registry/scopes-with-domain': { req: EmptyRequest; res: IRegistryScopesWithDomainResponse };
	'i/registry/set': { req: IRegistrySetRequest; res: EmptyResponse };
	'i/revoke-token': { req: IRevokeTokenRequest; res: EmptyResponse };
	'i/signin-history': { req: ISigninHistoryRequest; res: ISigninHistoryResponse };
	'i/unpin': { req: IUnpinRequest; res: IUnpinResponse };
	'i/update': { req: IUpdateRequest; res: IUpdateResponse };
	'i/update-email': { req: IUpdateEmailRequest; res: IUpdateEmailResponse };
	'i/webhooks/create': { req: IWebhooksCreateRequest; res: IWebhooksCreateResponse };
	'i/webhooks/delete': { req: IWebhooksDeleteRequest; res: EmptyResponse };
	'i/webhooks/list': { req: EmptyRequest; res: IWebhooksListResponse };
	'i/webhooks/show': { req: IWebhooksShowRequest; res: IWebhooksShowResponse };
	'i/webhooks/test': { req: IWebhooksTestRequest; res: EmptyResponse };
	'i/webhooks/update': { req: IWebhooksUpdateRequest; res: EmptyResponse };
	'invite/create': { req: EmptyRequest; res: InviteCreateResponse };
	'invite/delete': { req: InviteDeleteRequest; res: EmptyResponse };
	'invite/limit': { req: EmptyRequest; res: InviteLimitResponse };
	'invite/list': { req: InviteListRequest; res: InviteListResponse };
	'meta': { req: MetaRequest; res: MetaResponse };
	'miauth/gen-token': { req: MiauthGenTokenRequest; res: MiauthGenTokenResponse };
	'mute/create': { req: MuteCreateRequest; res: EmptyResponse };
	'mute/delete': { req: MuteDeleteRequest; res: EmptyResponse };
	'mute/list': { req: MuteListRequest; res: MuteListResponse };
	'my/apps': { req: MyAppsRequest; res: MyAppsResponse };
	'notes': { req: NotesRequest; res: NotesResponse };
	'notes/children': { req: NotesChildrenRequest; res: NotesChildrenResponse };
	'notes/clips': { req: NotesClipsRequest; res: NotesClipsResponse };
	'notes/conversation': { req: NotesConversationRequest; res: NotesConversationResponse };
	'notes/create': { req: NotesCreateRequest; res: NotesCreateResponse };
	'notes/delete': { req: NotesDeleteRequest; res: EmptyResponse };
	'notes/drafts/count': { req: EmptyRequest; res: NotesDraftsCountResponse };
	'notes/drafts/create': { req: NotesDraftsCreateRequest; res: NotesDraftsCreateResponse };
	'notes/drafts/delete': { req: NotesDraftsDeleteRequest; res: EmptyResponse };
	'notes/drafts/list': { req: NotesDraftsListRequest; res: NotesDraftsListResponse };
	'notes/drafts/update': { req: NotesDraftsUpdateRequest; res: NotesDraftsUpdateResponse };
	'notes/featured': { req: NotesFeaturedRequest; res: NotesFeaturedResponse };
	'notes/global-timeline': { req: NotesGlobalTimelineRequest; res: NotesGlobalTimelineResponse };
	'notes/hybrid-timeline': { req: NotesHybridTimelineRequest; res: NotesHybridTimelineResponse };
	'notes/local-timeline': { req: NotesLocalTimelineRequest; res: NotesLocalTimelineResponse };
	'notes/mentions': { req: NotesMentionsRequest; res: NotesMentionsResponse };
	'notes/polls/recommendation': { req: NotesPollsRecommendationRequest; res: NotesPollsRecommendationResponse };
	'notes/polls/vote': { req: NotesPollsVoteRequest; res: EmptyResponse };
	'notes/reactions': { req: NotesReactionsRequest; res: NotesReactionsResponse };
	'notes/reactions/create': { req: NotesReactionsCreateRequest; res: EmptyResponse };
	'notes/reactions/delete': { req: NotesReactionsDeleteRequest; res: EmptyResponse };
	'notes/renotes': { req: NotesRenotesRequest; res: NotesRenotesResponse };
	'notes/replies': { req: NotesRepliesRequest; res: NotesRepliesResponse };
	'notes/search': { req: NotesSearchRequest; res: NotesSearchResponse };
	'notes/search-by-tag': { req: NotesSearchByTagRequest; res: NotesSearchByTagResponse };
	'notes/show': { req: NotesShowRequest; res: NotesShowResponse };
	'notes/show-partial-bulk': { req: NotesShowPartialBulkRequest; res: NotesShowPartialBulkResponse };
	'notes/state': { req: NotesStateRequest; res: NotesStateResponse };
	'notes/thread-muting/create': { req: NotesThreadMutingCreateRequest; res: EmptyResponse };
	'notes/thread-muting/delete': { req: NotesThreadMutingDeleteRequest; res: EmptyResponse };
	'notes/timeline': { req: NotesTimelineRequest; res: NotesTimelineResponse };
	'notes/translate': { req: NotesTranslateRequest; res: NotesTranslateResponse };
	'notes/unrenote': { req: NotesUnrenoteRequest; res: EmptyResponse };
	'notifications/create': { req: NotificationsCreateRequest; res: EmptyResponse };
	'notifications/flush': { req: EmptyRequest; res: EmptyResponse };
	'notifications/mark-all-as-read': { req: EmptyRequest; res: EmptyResponse };
	'notifications/test-notification': { req: EmptyRequest; res: EmptyResponse };
	'ping': { req: EmptyRequest; res: PingResponse };
	'pinned-users': { req: EmptyRequest; res: PinnedUsersResponse };
	'promo/read': { req: PromoReadRequest; res: EmptyResponse };
	'renote-mute/create': { req: RenoteMuteCreateRequest; res: EmptyResponse };
	'renote-mute/delete': { req: RenoteMuteDeleteRequest; res: EmptyResponse };
	'renote-mute/list': { req: RenoteMuteListRequest; res: RenoteMuteListResponse };
	'request-reset-password': { req: RequestResetPasswordRequest; res: EmptyResponse };
	'reset-db': { req: EmptyRequest; res: EmptyResponse };
	'reset-password': { req: ResetPasswordRequest; res: EmptyResponse };
	'retention': { req: EmptyRequest; res: RetentionResponse };
	'roles/list': { req: EmptyRequest; res: RolesListResponse };
	'roles/notes': { req: RolesNotesRequest; res: RolesNotesResponse };
	'roles/show': { req: RolesShowRequest; res: RolesShowResponse };
	'roles/users': { req: RolesUsersRequest; res: RolesUsersResponse };
	'server-info': { req: EmptyRequest; res: ServerInfoResponse };
	'stats': { req: EmptyRequest; res: StatsResponse };
	'sw/register': { req: SwRegisterRequest; res: SwRegisterResponse };
	'sw/show-registration': { req: SwShowRegistrationRequest; res: SwShowRegistrationResponse };
	'sw/unregister': { req: SwUnregisterRequest; res: EmptyResponse };
	'sw/update-registration': { req: SwUpdateRegistrationRequest; res: SwUpdateRegistrationResponse };
	'test': { req: TestRequest; res: TestResponse };
	'username/available': { req: UsernameAvailableRequest; res: UsernameAvailableResponse };
	'users': { req: UsersRequest; res: UsersResponse };
	'users/clips': { req: UsersClipsRequest; res: UsersClipsResponse };
	'users/featured-notes': { req: UsersFeaturedNotesRequest; res: UsersFeaturedNotesResponse };
	'users/followers': { req: UsersFollowersRequest; res: UsersFollowersResponse };
	'users/following': { req: UsersFollowingRequest; res: UsersFollowingResponse };
	'users/get-following-users-by-birthday': { req: UsersGetFollowingUsersByBirthdayRequest; res: UsersGetFollowingUsersByBirthdayResponse };
	'users/get-frequently-replied-users': { req: UsersGetFrequentlyRepliedUsersRequest; res: UsersGetFrequentlyRepliedUsersResponse };
	'users/notes': { req: UsersNotesRequest; res: UsersNotesResponse };
	'users/reactions': { req: UsersReactionsRequest; res: UsersReactionsResponse };
	'users/relation': { req: UsersRelationRequest; res: UsersRelationResponse };
	'users/report-abuse': { req: UsersReportAbuseRequest; res: EmptyResponse };
	'users/search': { req: UsersSearchRequest; res: UsersSearchResponse };
	'users/search-by-username-and-host': { req: UsersSearchByUsernameAndHostRequest; res: UsersSearchByUsernameAndHostResponse };
	'users/show': { req: UsersShowRequest; res: UsersShowResponse };
	'users/update-memo': { req: UsersUpdateMemoRequest; res: EmptyResponse };
	'v2/admin/emoji/list': { req: V2AdminEmojiListRequest; res: V2AdminEmojiListResponse };
	'verify-email': { req: VerifyEmailRequest; res: EmptyResponse };
};

/**
 * NOTE: The content-type for all endpoints not listed here is application/json.
 */
export const endpointReqTypes = {
	'drive/files/create': 'multipart/form-data',
} as const satisfies { [K in keyof Endpoints]?: 'multipart/form-data'; };
